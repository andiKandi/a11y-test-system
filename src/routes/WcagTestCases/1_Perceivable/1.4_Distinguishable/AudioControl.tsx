import { TestCase, Level } from "../../../../components/TestCase/TestCase";
// @ts-ignore
import JEFFBOB from "../../../../assets/jeffbob.mp3";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const AudioControl = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F93: Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays"
          }
          successCriterionInWords={"Audio Control"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-control"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F93.html"
          }
          successCriterionNumber={"1.4.2"}
          level={Level.A}
        >
          <audio src={JEFFBOB} autoPlay loop></audio>
        </TestCase>
      </Frame>
    </>
  );
};
