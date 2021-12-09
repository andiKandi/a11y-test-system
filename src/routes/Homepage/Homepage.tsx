import { Frame } from "../../components/Frame/Frame";
import { TestCase, Level } from "../../components/TestCase/TestCase";
import BBC from "../../assets/bbc-blocks-dark.png";
import "./Homepage.css";

interface Props {
  pageTitle: string;
}

export const Homepage = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <p className={"homepage__intro"}>
          This is the current look of all test cases.
        </p>
        <p className={"homepage__intro"}>
          Each test case is surrounded by a solid border. Inside the area is
          devided into two parts. Above the dashed line in the top row it shows
          the title, the guideline level and the actual success criterion. If
          available beneath the top row there is an explanation to the violation
          and a link for further information.
        </p>

        <TestCase
          title={
            'F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"'
          }
          successCriterionNumber={"1.1.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/F65.html"}
          explanation={
            "In the code example below, the person using a screen reader would not know the purpose of the image."
          }
          successCriterionInWords={"Non-text Content"}
          level={Level.A}
        >
          <img src={BBC} />
        </TestCase>
      </Frame>
    </>
  );
};
