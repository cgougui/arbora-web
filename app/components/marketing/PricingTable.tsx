import { Badge, Button, SegmentedControl, Text, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router";

import { copy } from "~/content/copy";
import classes from "./PricingTable.module.css";

type Billing = "monthly" | "yearly";

export function PricingTable() {
  const [billing, setBilling] = useState<Billing>("yearly");
  const { billing: labels, tiers } = copy.pricing;

  return (
    <>
      <div className={classes.toggle}>
        <SegmentedControl
          radius="xl"
          size="md"
          className={classes.segmented}
          styles={{ label: { overflow: "visible", paddingInline: 18 } }}
          value={billing}
          onChange={(value) => setBilling(value as Billing)}
          data={[
            { value: "monthly", label: labels.monthly },
            {
              value: "yearly",
              label: (
                <>
                  {labels.yearly}{" "}
                  <Badge size="xs" variant="gradient" ml={4}>
                    {labels.yearlyBadge}
                  </Badge>
                </>
              ),
            },
          ]}
        />
      </div>

      <div className={classes.grid}>
        {tiers.map((tier) => (
          <article key={tier.id} className={`${classes.tier} arbora-reveal`} data-featured={tier.featured || undefined}>
            {tier.badge && (
              <Badge className={classes.badge} variant="gradient">
                {tier.badge}
              </Badge>
            )}
            <Title order={3} className={classes.name}>
              {tier.name}
            </Title>
            <Text className={classes.description}>{tier.description}</Text>
            <div className={classes.price}>
              <span className={classes.amount}>{tier[billing]}</span>
              <span className={classes.unit}>{tier.unit}</span>
            </div>
            <Button
              component={Link}
              to={tier.cta.to}
              size="md"
              fullWidth
              variant={tier.featured ? "gradient" : "default"}
            >
              {tier.cta.label}
            </Button>
            <ul className={classes.features}>
              {tier.features.map((feature) => (
                <li key={feature}>
                  <IconCheck size={16} stroke={2.5} />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
