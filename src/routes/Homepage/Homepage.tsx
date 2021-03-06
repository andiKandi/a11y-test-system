import { Frame } from "../../components/Frame/Frame";
import { TestCase, Level } from "../../components/TestCase/TestCase";
import W3C from "../../assets/w3c.png";
import "./Homepage.css";

interface Props {
  pageTitle: string;
}

export const Homepage = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <section>
          <p className={"homepage__intro"}>
            This is the current look of all test cases.
          </p>
          <p className={"homepage__intro"}>
            Each test case is surrounded by a solid border. The area inside is
            devided into two parts:
          </p>
          <ul className={"homepage__intro"}>
            <li>
              Above the dashed line in the top row it shows the title, the
              guideline level and the name of and link to the concerning success
              criteria. If available beneath the top row there is an explanation
              to the violation and a link for further information.
            </li>
            <li>
              Beneath the dashed line is the actual test case. Inside this area
              there is only content and styling relevant to this success
              criteria violation.
            </li>
          </ul>
        </section>
        <TestCase
          title={
            "Test case title that hints at the success criteria violation: e.g. 'Missing alt attribute on img element.'"
          }
          successCriterionNumber={"1.1.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/html/H37.html"
          }
          explanation={
            "Because this is the homepage that includes all structural elements of this test system, there shouldn't be any violation present. The image link beneath sports a sufficient alt attribute. The purpose of this page is to test if there is an unintended error inside one of the structural elements and to show case its design."
          }
          successCriterionInWords={"Non-text Content"}
          level={Level.A}
          id={"Example test case"}
        >
          <a href={"https://w3.org/"}>
            <img src={W3C} alt={"W3C logo"} />
          </a>
        </TestCase>
      </Frame>
    </>
  );
};
