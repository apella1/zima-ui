import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { mockTherapists } from "@/data/mock-therapists";
import { Filter, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { TherapistCard } from "./components/therapist-card";
import {
  MatchFormData,
  TherapistMatchModal,
} from "./components/therapist-match-modal";

export default function Therapists() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(
    null
  );
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [selectedMode, setSelectedMode] = useState<string>("all");
  const [matchData, setMatchData] = useState<MatchFormData | null>(null);

  const therapists = mockTherapists;

  const locations = useMemo(
    () => Array.from(new Set(therapists.map((t) => t.location.split(", ")[0]))),
    [therapists]
  );

  const languages = useMemo(
    () => Array.from(new Set(therapists.flatMap((t) => t.languages))),
    [therapists]
  );

  const modes = useMemo(
    () => Array.from(new Set(therapists.flatMap((t) => t.sessionInfo.modes))),
    [therapists]
  );

  const specialties = useMemo(
    () => Array.from(new Set(therapists.flatMap((t) => t.specialties))),
    [therapists]
  );

  const getPriceRangeValues = (range: string): [number, number] => {
    switch (range) {
      case "0-5000":
        return [0, 5000];
      case "5001-10000":
        return [5001, 10000];
      case "10001-15000":
        return [10001, 15000];
      case "15001+":
        return [15001, Infinity];
      default:
        return [0, Infinity];
    }
  };

  const filteredTherapists = useMemo(() => {
    return therapists.filter((therapist) => {
      const matchesSearch =
        therapist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        therapist.specialties.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        therapist.introduction
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesSpecialty =
        !selectedSpecialty || therapist.specialties.includes(selectedSpecialty);

      const matchesLocation =
        selectedLocation === "all" ||
        therapist.location.includes(selectedLocation);

      const matchesLanguage =
        selectedLanguage === "all" ||
        therapist.languages.includes(selectedLanguage);

      const matchesPrice =
        therapist.sessionInfo.cost >= priceRange[0] &&
        therapist.sessionInfo.cost <= priceRange[1];

      const matchesMode =
        selectedMode === "all" ||
        therapist.sessionInfo.modes.includes(
          selectedMode as "in-person" | "video" | "phone"
        );

      const baseFilters =
        matchesSearch &&
        matchesSpecialty &&
        matchesLocation &&
        matchesLanguage &&
        matchesPrice &&
        matchesMode;

      if (!matchData) return baseFilters;

      const matchesGender =
        matchData.preferredGender === "any" ||
        therapist.gender === matchData.preferredGender;

      const matchesSessionType = matchData.sessionType.some((type) =>
        therapist.sessionInfo.modes.includes(
          type as "in-person" | "video" | "phone"
        )
      );

      const matchesConcerns = matchData.mainConcerns.some((concern) =>
        therapist.specialties.includes(concern)
      );

      const [minPrice, maxPrice] = getPriceRangeValues(matchData.priceRange);
      const matchesPriceRange =
        therapist.sessionInfo.cost >= minPrice &&
        therapist.sessionInfo.cost <= maxPrice;

      const matchesApproach =
        matchData.preferredApproach.length === 0 ||
        matchData.preferredApproach.some((approach) =>
          therapist.approaches.some((a) => a.name === approach)
        );

      const matchesMatchLanguages = matchData.languages.every((lang) =>
        therapist.languages.includes(lang)
      );

      return (
        baseFilters &&
        matchesGender &&
        matchesSessionType &&
        matchesConcerns &&
        matchesPriceRange &&
        matchesApproach &&
        matchesMatchLanguages
      );
    });
  }, [
    therapists,
    searchQuery,
    selectedSpecialty,
    selectedLocation,
    selectedLanguage,
    priceRange,
    selectedMode,
    matchData, // Add matchData to dependencies
  ]);

  const handleMatch = (data: MatchFormData) => {
    setMatchData(data);
    // Reset other filters when match is applied
    setSearchQuery("");
    setSelectedSpecialty(null);
    setSelectedLocation("all");
    setSelectedLanguage("all");
    setPriceRange([0, 15000]);
    setSelectedMode("all");
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedSpecialty(null);
    setSelectedLocation("all");
    setSelectedLanguage("all");
    setPriceRange([0, 15000]);
    setSelectedMode("all");
    setMatchData(null);
  };

  const clearMatchFilters = () => {
    setMatchData(null);
    toast.success("Match filters cleared");
  };

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Find Your Therapist
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          Connect with licensed professionals who understand your journey and
          can provide the support you need.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        {/* Search and Filters */}
        <div className="w-full md:w-72 space-y-6">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search therapists..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowMatchModal(true)}
              >
                Find My Match
              </Button>

              {(searchQuery ||
                selectedSpecialty ||
                selectedLocation !== "all" ||
                selectedLanguage !== "all" ||
                selectedMode !== "all" ||
                priceRange[0] !== 0 ||
                priceRange[1] !== 15000 ||
                matchData) && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={clearAllFilters}
                  title="Clear all filters"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {matchData && (
            <div className="p-4 border rounded-lg space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Match Criteria</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearMatchFilters}
                  className="h-8 px-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {matchData.preferredGender !== "any" && (
                  <Badge variant="secondary" className="mr-2">
                    {matchData.preferredGender}
                  </Badge>
                )}
                {matchData.sessionType.map((type) => (
                  <Badge key={type} variant="secondary" className="mr-2">
                    {type}
                  </Badge>
                ))}
                {matchData.mainConcerns.map((concern) => (
                  <Badge key={concern} variant="secondary" className="mr-2">
                    {concern}
                  </Badge>
                ))}
                {matchData.priceRange !== "any" && (
                  <Badge variant="secondary" className="mr-2">
                    KES {matchData.priceRange}
                  </Badge>
                )}
                {matchData.languages.map((lang) => (
                  <Badge key={lang} variant="secondary" className="mr-2">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-6 p-4 border rounded-lg">
            <h3 className="font-medium flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <Select
                  value={selectedLocation}
                  onValueChange={setSelectedLocation}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All locations</SelectItem>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Language</label>
                <Select
                  value={selectedLanguage}
                  onValueChange={setSelectedLanguage}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All languages</SelectItem>
                    {languages.map((language) => (
                      <SelectItem key={language} value={language}>
                        {language}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Session Mode</label>
                <Select value={selectedMode} onValueChange={setSelectedMode}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All modes</SelectItem>
                    {modes.map((mode) => (
                      <SelectItem key={mode} value={mode}>
                        {mode.charAt(0).toUpperCase() + mode.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Price Range (KES)</label>
                <div className="pt-2">
                  <Slider
                    value={priceRange}
                    min={0}
                    max={15000}
                    step={500}
                    onValueChange={(value) =>
                      setPriceRange(value as [number, number])
                    }
                  />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>{priceRange[0].toLocaleString()}</span>
                    <span>{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((specialty) => (
                    <Badge
                      key={specialty}
                      variant={
                        selectedSpecialty === specialty ? "default" : "outline"
                      }
                      className="cursor-pointer"
                      onClick={() =>
                        setSelectedSpecialty(
                          specialty === selectedSpecialty ? null : specialty
                        )
                      }
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Therapist List */}
        <div className="flex-1">
          <div className="mb-4 text-muted-foreground">
            Found {filteredTherapists.length} therapists
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredTherapists.map((therapist) => (
              <TherapistCard
                key={therapist.id}
                therapist={therapist}
                onBook={() => navigate(`/book/${therapist.id}`)}
                onMessage={() => navigate(`/chat/${therapist.id}`)}
              />
            ))}
          </div>
        </div>
      </div>

      <TherapistMatchModal
        open={showMatchModal}
        onClose={() => setShowMatchModal(false)}
        onMatch={handleMatch}
      />
    </div>
  );
}
