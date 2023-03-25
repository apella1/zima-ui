export {};
import { Conditions } from "./Conditions";

interface ICondition {
  title: string;
  body: string;
}

const Condition = ({ condition }: { condition: ICondition }) => {
  const { title, body } = condition;
  return (
    <dl className="flex flex-col p-2">
      <dt className="text-2xl font-semibold">{title}</dt>
      <dd className="text-lg font-normal">{body}</dd>
    </dl>
  );
};

export default function ConditionPreview() {
  return (
    <section id="conditions" className="flex flex-col p-6">
      <h3 className="self-center text-4xl font-bold">Common Conditions</h3>
      <div className="md:grid md:gap-4 md:grid-cols-3">
        {Conditions.map((item, id) => (
          <Condition condition={item} key={id} />
        ))}
      </div>
    </section>
  );
}
