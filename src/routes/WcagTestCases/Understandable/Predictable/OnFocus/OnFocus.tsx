import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import LINK from "../../../../../assets/link.png";
import "./OnFocus.css";
import { Frame } from "../../../../../components/Frame/Frame";
import { Link } from "react-router-dom";

interface Props {
  pageTitle: string;
}

export const OnFocus = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to " +
            "remove focus when focus is received"
          }
          successCriterionInWords={"On Focus"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#on-focus"
          }
          successCriterionNumber={"3.2.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html"
          }
          explanation={
            "Content that normally receives focus when the content is accessed by keyboard may have this " +
            "focus removed by scripting. This is sometimes done when designer considers the system focus " +
            "indicator to be unsightly. However, the system focus indicator is an important part of " +
            "accessibility for keyboard users. In addition, this practice removes focus from the content entirely, " +
            "which means that the content can only be operated by a pointing device such as a mouse."
          }
          id={"3.2.1_1"}
        >
          <input
            id={"keyboard__blur-error-first"}
            type="submit"
            onClick={() => {
              alert("Test!");
            }}
            onFocus={() => {
              document!.getElementById("keyboard__blur-error-first")!.blur();
            }}
          />
        </TestCase>

        <TestCase
          title={
            "F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received"
          }
          successCriterionInWords={"On Focus"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#on-focus"
          }
          successCriterionNumber={"3.2.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html"
          }
          explanation={
            "Content that normally receives focus when the content is accessed by keyboard may have this " +
            "focus removed by scripting. This is sometimes done when designer considers the system focus indicator to be " +
            "unsightly. However, the system focus indicator is an important part of accessibility for keyboard users. " +
            "In addition, this practice removes focus from the content entirely, which means that the content can only be " +
            "operated by a pointing device such as a mouse."
          }
          id={"3.2.1_2"}
        >
          <Link
            id={"keyboard__blur-error-second"}
            onFocus={() => {
              document!.getElementById("keyboard__blur-error-second")!.blur();
            }}
            to="/some-page"
          >
            <img src={LINK} alt={"button without focus when focused"} />
          </Link>
        </TestCase>

        <TestCase
          title={"Keyboard focus is not indicated visually"}
          successCriterionInWords={"On Focus"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#on-focus"
          }
          successCriterionNumber={"3.2.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html"
          }
          id={"3.2.1_3"}
        >
          <a className={"no-outline"} href={"/some-page"}>
            Link with no focus style
          </a>
        </TestCase>
      </Frame>
    </>
  );
};
