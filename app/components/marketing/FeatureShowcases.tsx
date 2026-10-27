import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import { Link } from "react-router";

import { Section } from "~/components/ui/Section";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { copy } from "~/content/copy";
import { AppMockup } from "./AppMockup";
import classes from "./FeatureShowcases.module.css";

export function FeatureShowcases() {
  return copy.home.showcases.map((showcase, i) => (
    <Section key={showcase.id} className={classes.section}>
      <div className={classes.layout} data-reverse={i % 2 === 1 || undefined}>
        <div className={classes.content}>
          <SectionHeading copy={showcase} align="start" />
          <ul className={classes.points}>
            {showcase.points.map((point) => <li key={point}><IconCheck size={17} aria-hidden="true" /><span>{point}</span></li>)}
          </ul>
          <Link to={showcase.link.to} className={classes.link}>{showcase.link.label}<IconArrowRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className={classes.visual}><AppMockup variant={showcase.id} compact /></div>
      </div>
    </Section>
  ));
}
