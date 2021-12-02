import { Level, TestCase } from "../../components/TestCase/TestCase";

export const Duplicates = () => {
  return (
    <>
      <TestCase
        title={"Duplicate id"}
        successCriterionInWords={"Parsing"}
        successCriterionNumber={"4.1.1"}
        linkToSuccessCriterion={
          "https://www.w3.org/WAI/WCAG21/quickref/#parsing"
        }
        level={Level.A}
        linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/F77.html"}
        explanation={
          "In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features."
        }
      >
        <div id={"nav"}>global nav</div>
        <div id={"nav"}>page nav</div>
      </TestCase>
    </>
  );
};
