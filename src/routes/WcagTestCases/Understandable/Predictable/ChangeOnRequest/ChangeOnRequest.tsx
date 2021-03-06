import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ChangeOnRequest = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Link launches new window with no warning"}
          successCriterionInWords={"Change on Request"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#change-on-request"
          }
          successCriterionNumber={"3.2.5"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/G201.html"}
          explanation={
            "The objective of this technique is to provide a warning before automatically opening " +
            "a new window or tab. Opening new windows automatically when a link is activated can be " +
            "disorienting for people who have difficulty perceiving visual content, and for some people " +
            "with cognitive disabilities, if they are not warned in advance. Providing a warning allows " +
            "the user to decide it they want to leave the current window, and the warning will help them " +
            "find their way back, if they do decide they would like to go to the new window. " +
            'It will help them understand that the "back" button will not work and that they have to ' +
            "return to the last window they had open, in order to find their previous location."
          }
          id={"3.2.5_1"}
        >
          <a href={"https://twitter.com/"} target={"_blank"} rel="noreferrer">
            Twitter
          </a>
        </TestCase>
      </Frame>
    </>
  );
};
