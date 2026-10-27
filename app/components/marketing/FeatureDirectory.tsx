import { Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";

import { copy } from "~/content/copy";
import type { FeatureGroupId } from "~/content/schema";
import { AppMockup } from "./AppMockup";
import { featureGroupIcons } from "./featureIcons";
import classes from "./FeatureDirectory.module.css";

export function FeatureDirectory() {
  const { groups } = copy.features;
  const [active, setActive] = useState<FeatureGroupId>(groups[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id as FeatureGroupId);
      }
    }, { rootMargin: "-160px 0px -55% 0px" });
    for (const group of groups) {
      const section = document.getElementById(group.id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [groups]);

  return (
    <>
      <nav className={classes.navigation} aria-label={copy.features.navigationLabel}>
        {groups.map((group) => {
          const GroupIcon = featureGroupIcons[group.id];
          return <a key={group.id} href={`#${group.id}`} aria-current={active === group.id ? "location" : undefined} onClick={() => setActive(group.id)}><GroupIcon size={15} aria-hidden="true" />{group.navLabel}</a>;
        })}
      </nav>
      <div className={classes.groups}>
        {groups.map((group, i) => {
          const GroupIcon = featureGroupIcons[group.id];
          return (
            <section key={group.id} id={group.id} className={classes.group} aria-labelledby={`${group.id}-title`}>
              <div className={classes.intro}>
                <div className={classes.heading}>
                  <div className={classes.kicker}><span className={classes.icon}><GroupIcon size={23} stroke={1.6} aria-hidden="true" /></span><span>{String(i + 1).padStart(2, "0")} / {String(groups.length).padStart(2, "0")}</span></div>
                  <span className={classes.eyebrow}>{group.eyebrow}</span>
                  <Title order={2} id={`${group.id}-title`} className={classes.title}>{group.title}</Title>
                  <Text className={classes.description}>{group.description}</Text>
                </div>
                <div className={classes.visual}><AppMockup variant={group.id} compact /></div>
              </div>
              <dl className={classes.items}>
                {group.items.map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.description}</dd></div>)}
              </dl>
            </section>
          );
        })}
      </div>
    </>
  );
}
