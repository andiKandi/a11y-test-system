import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <>
      <aside className={"sidebar"}>
        <nav className="nav">
          <ul className="nav__item-wrapper">
            <li>
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li>
              Perceivable
              <ul>
                <li>
                  Text Alternatives
                  <ul>
                    <li>
                      <Link className="nav__link" to={"/wcag/non-text-content"}>
                        Non-text Content
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Time-based Media
                  <ul>
                    <li>
                      <Link
                        className="nav__link"
                        to={"/wcag/audio-only-and-video-only-prerecorded"}
                      >
                        Audio-only and Video-only (Prerecorded)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav__link"
                        to={"/wcag/media-alternative-prerecorded"}
                      >
                        Media Alternative (Prerecorded)
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Adaptable
                  <ul>
                    <li>
                      <Link
                        className="nav__link"
                        to={"/wcag/info-and-relationships"}
                      >
                        Info and Relationships
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        className="nav__link"
                        to={"/wcag/meaningful-sequence"}
                      >
                        Meaningful Sequence
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Distinguishable
                  <ul>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/use-of-color"}>
                        Use of Color
                      </Link>
                    </li>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/audio-control"}>
                        Audio Control
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/contrast-minimum"}
                      >
                        Contrast (Minimum)
                      </Link>
                    </li>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/resize-text"}>
                        Resize Text
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/contrast-enhanced"}
                      >
                        Contrast (Enhanced)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/visual-presentation"}
                      >
                        Visual Presentation
                      </Link>
                    </li>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/reflow"}>
                        Reflow
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/non-text-contrast"}
                      >
                        Non-text Contrast
                      </Link>
                    </li>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/text-spacing"}>
                        Text Spacing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/content-on-hover-or-focus"}
                      >
                        Content on Hover or Focus
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Operable
              <ul>
                <li>
                  Keyboard Accessible
                  <ul>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/keyboard"}>
                        Keayboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/no-keyboard-trap"}
                      >
                        No Keyboard Trap
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/character-key-shortcuts"}
                      >
                        Character Key Shortcuts
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Enough Time
                  <ul>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/timing-adjustable"}
                      >
                        Timing Adjustable
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/pause-stop-hide"}
                      >
                        Pause, Stop, Hide
                      </Link>
                    </li>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/interruptions"}>
                        Interruptions
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Seizures and Physical Reactions
                  <ul>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/three-flashes-or-below-threshold"}
                      >
                        Three Flashes or Below Threshold
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Navigable
                  <ul>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/bypass-blocks"}>
                        Bypass Blocks
                      </Link>
                    </li>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/page-titled"}>
                        Page Titled
                      </Link>
                    </li>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/focus-order"}>
                        Focus Order
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/link-purpose-in-context"}
                      >
                        Link Purpose (In Context)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/headings-and-labels"}
                      >
                        Heading and Labels
                      </Link>
                    </li>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/focus-visible"}>
                        Focus Visible
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/link-purpose-link-only"}
                      >
                        Link Purpose (Link Only)
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Input Modalities
                  <ul>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/label-in-name"}>
                        Label in Name
                      </Link>
                    </li>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/target-size"}>
                        Target Size
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Understandable
              <ul>
                <li>
                  Readable
                  <ul>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/language-of-page"}
                      >
                        Language of Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/language-of-parts"}
                      >
                        Language of Parts
                      </Link>
                    </li>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/reading-level"}>
                        Reading Level
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Predictable
                  <ul>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/on-focus"}>
                        On Focus
                      </Link>
                    </li>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/on-input"}>
                        On Input
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/consistent-navigation"}
                      >
                        Consistent Navigation
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/consistent-identification"}
                      >
                        Consistent Identification
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/change-on-request"}
                      >
                        Change on Request
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Input Assistance
                  <ul>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/error-identification"}
                      >
                        Error Identification
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/labels-or-instructions"}
                      >
                        Labels or Instructions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/error-suggestion"}
                      >
                        Error Suggestion
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Robust
              <ul>
                <li>
                  Compatible
                  <ul>
                    <li>
                      <Link className={"nav__link"} to={"/wcag/parsing"}>
                        Parsing
                      </Link>{" "}
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/name-role-value"}
                      >
                        Name, Role, Value
                      </Link>{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};