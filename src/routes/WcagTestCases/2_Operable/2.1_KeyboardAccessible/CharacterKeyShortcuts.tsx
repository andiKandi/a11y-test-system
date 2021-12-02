import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const CharacterKeyShortcuts = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={"Accesskey attribute used for link"}
          successCriterion={"keyboard"}
          serial={1}
          guideline={"2.1.4"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#character-key-shortcuts"
          }
          level={Level.A}
        >
          <a accessKey={"A"} href={"page.html"}>
            A link with an accesskey attribute
          </a>
        </GuidelineError>
      </Frame>
    </>
  );
};