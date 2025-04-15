export {};
import { useState } from "react";
import { Conditions } from "./conditions";

interface ICondition {
  title: string;
  body: string;
}

interface IConditionCardProps {
  condition: ICondition;
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const ConditionCard = ({ condition, isExpanded, setIsExpanded }: IConditionCardProps) => {
  const { title, body } = condition;

  return (
    <div className="w-full max-w-md rounded overflow-hidden shadow-lg mb-4">
      <div
        className="px-6 py-4 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="font-bold text-xl">{title}</div>
        <div>
          <svg
            className={`transform transition-transform ${
              isExpanded ? "rotate-180" : ""
            } h-6 w-6`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {isExpanded && (
        <div className="px-6 py-4 text-gray-700">
          <p className="text-base">{body}</p>
        </div>
      )}
    </div>
  );
};

export default function ConditionPreview() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <section id="conditions" className="flex flex-col p-6">
      <h3 className="self-center text-4xl font-bold">Common Conditions</h3>
      <div className="md:grid md:gap-4 md:grid-cols-3">
        {Conditions.map((item, id) => (
          <ConditionCard
            key={id}
            condition={item}
            isExpanded={id === expandedIndex}
            setIsExpanded={(expanded) => setExpandedIndex(expanded ? id : -1)}
          />
        ))}
      </div>
    </section>
  );
}
