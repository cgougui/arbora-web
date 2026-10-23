import { Kbd } from "@mantine/core";
import {
  IconChevronRight,
  IconClock,
  IconCloud,
  IconDeviceDesktop,
  IconDeviceFloppy,
  IconDownload,
  IconFileText,
  IconFolder,
  IconFolderOpen,
  IconSearch,
  IconServer,
  type Icon,
} from "@tabler/icons-react";

import { copy } from "~/content/copy";
import classes from "./AppMockup.module.css";
import { fileKinds } from "./fileKinds";

const favoriteIcons: Icon[] = [IconClock, IconDeviceDesktop, IconFileText, IconDownload];
const locationIcons: Icon[] = [IconDeviceFloppy, IconServer, IconCloud];
const tagColors = ["#34d399", "#22d3ee", "#a78bfa"];
const SELECTED_INDEX = 1;

/**
 * A static, decorative rendition of the Arbora app window.
 * Purely visual — hidden from assistive tech.
 */
export function AppMockup() {
  const m = copy.home.mockup;
  const project = m.tree[0];

  return (
    <div className={classes.stage} aria-hidden="true">
      <div className={classes.window}>
        <div className={classes.titlebar}>
          <div className={classes.lights}>
            <span />
            <span />
            <span />
          </div>
          <span>{m.windowTitle}</span>
          <span />
        </div>

        <div className={classes.body}>
          <aside className={classes.sidebar}>
            <div className={classes.groupLabel}>{m.sidebar.favorites}</div>
            {m.favorites.map((label, i) => {
              const ItemIcon = favoriteIcons[i % favoriteIcons.length];
              return (
                <div key={label} className={classes.item}>
                  <ItemIcon size={16} stroke={1.75} />
                  {label}
                </div>
              );
            })}

            <div className={classes.groupLabel}>{m.sidebar.locations}</div>
            {m.locations.map((label, i) => {
              const ItemIcon = locationIcons[i % locationIcons.length];
              return (
                <div key={label} className={classes.item}>
                  <ItemIcon size={16} stroke={1.75} />
                  {label}
                </div>
              );
            })}
            {project && (
              <>
                <div className={classes.item}>
                  <IconFolderOpen size={16} stroke={1.75} />
                  {project.label}
                </div>
                {project.children?.map((child) => (
                  <div key={child.label}>
                    <div className={classes.item} style={{ paddingLeft: 28 }}>
                      <IconFolder size={16} stroke={1.75} />
                      {child.label}
                    </div>
                    {child.children?.map((leaf, i) => (
                      <div
                        key={leaf.label}
                        className={classes.item}
                        style={{ paddingLeft: 46 }}
                        data-active={i === 0 || undefined}
                      >
                        <IconFolder size={16} stroke={1.75} />
                        {leaf.label}
                      </div>
                    ))}
                  </div>
                ))}
              </>
            )}

            <div className={classes.groupLabel}>{m.sidebar.tags}</div>
            {m.tags.map((label, i) => (
              <div key={label} className={classes.item}>
                <span className={classes.tag} style={{ background: tagColors[i % tagColors.length] }} />
                {label}
              </div>
            ))}
          </aside>

          <div className={classes.main}>
            <div className={classes.toolbar}>
              <div className={classes.crumbs}>
                {m.breadcrumb.map((crumb, i) => (
                  <span key={crumb} style={{ display: "contents" }}>
                    {i > 0 && <IconChevronRight size={14} />}
                    {i === m.breadcrumb.length - 1 ? <strong>{crumb}</strong> : crumb}
                  </span>
                ))}
              </div>
              <div className={classes.search}>
                <IconSearch size={15} />
                <span>{m.searchPlaceholder}</span>
                <Kbd size="xs" ml="auto">
                  ⌘K
                </Kbd>
              </div>
            </div>

            <div className={classes.files}>
              {m.files.map((file, i) => {
                const kind = fileKinds[file.kind];
                const KindIcon = kind.icon;
                return (
                  <div
                    key={file.name}
                    className={classes.file}
                    data-selected={i === SELECTED_INDEX || undefined}
                    style={{ "--kind": kind.color } as React.CSSProperties}
                  >
                    <div className={classes.thumb}>
                      <KindIcon size={28} stroke={1.5} />
                    </div>
                    <div className={classes.fileName}>{file.name}</div>
                    <div className={classes.fileMeta}>{file.meta}</div>
                  </div>
                );
              })}
            </div>

            <div className={classes.status}>{m.statusBar}</div>
          </div>

          <aside className={classes.preview}>
            <div className={classes.art} />
            <div>
              <div className={classes.previewTitle}>{m.preview.title}</div>
              <div className={classes.fileMeta} style={{ marginTop: 2 }}>
                {m.preview.kind}
              </div>
            </div>
            <div>
              {m.preview.rows.map((row) => (
                <div key={row.label} className={classes.row}>
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
