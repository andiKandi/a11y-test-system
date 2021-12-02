import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const NoKeyboardTrap = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={"Keyboard trap"}
          successCriterionInWords={"keyboard"}
          serial={1}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap"
          }
          successCriterionNumber={"2.1.2"}
          level={Level.A}
        >
          <a href={"/keyboard/trap"}>
            Example page that contains a keyboard trap
          </a>
        </GuidelineError>
      </Frame>
    </>
  );
};
