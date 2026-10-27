import {
  IconArrowLeft, IconArrowRight, IconCheck, IconChevronDown, IconChevronRight,
  IconClock, IconDeviceDesktop, IconDownload, IconFileText, IconFolder,
  IconLayoutColumns, IconLayoutGrid, IconList, IconSearch, IconServer,
  IconSettings, IconStar, type Icon,
} from "@tabler/icons-react";

import { copy } from "~/content/copy";
import type { FeatureGroupId, MockupFile } from "~/content/schema";
import classes from "./AppMockup.module.css";
import { fileKinds } from "./fileKinds";

const favoriteIcons: Icon[] = [IconClock, IconDeviceDesktop, IconFileText, IconDownload];
const tagColors = ["#34d399", "#22d3ee", "#a78bfa"];

function FileGrid({ files }: { files: MockupFile[] }) {
  return (
    <div className={classes.files}>
      {files.map((file, i) => {
        const kind = fileKinds[file.kind];
        const KindIcon = kind.icon;
        return (
          <div key={file.name} className={classes.file} data-selected={i === 1 || undefined} style={{ "--kind": kind.color } as React.CSSProperties}>
            <div className={classes.thumb}>
              {file.kind === "image" ? <div className={classes.art} /> : <KindIcon size={30} stroke={1.4} />}
            </div>
            <div className={classes.fileName}>{file.name}</div>
            <div className={classes.fileMeta}>{file.meta}</div>
          </div>
        );
      })}
    </div>
  );
}

function Breadcrumbs({ items }: { items: string[] }) {
  return (
    <div className={classes.crumbs}>
      <IconFolder size={14} />
      {items.map((crumb, i) => (
        <span key={`${i}-${crumb}`}>
          {i > 0 && <IconChevronRight size={12} />}
          <span>{crumb}</span>
        </span>
      ))}
    </div>
  );
}

/** Illustrative UI, separate from the site's interactive controls. */
export function AppMockup({ variant = "browse", compact = false }: { variant?: FeatureGroupId; compact?: boolean }) {
  const m = copy.home.mockup;
  const scene = copy.mockups[variant];
  const isDualPane = variant === "browse" || variant === "connections";

  return (
    <figure className={classes.stage} data-variant={variant} data-compact={compact || undefined}>
      <div className={classes.window} aria-hidden="true">
        <div className={classes.titlebar}>
          <div className={classes.lights}><span /><span /><span /></div>
          <span>{m.windowTitle} <span className={classes.titleDivider}>/</span> {scene.title}</span>
          <IconLayoutColumns size={15} />
        </div>
        <div className={classes.workspacebar}>
          <IconLayoutGrid size={15} /><span>{m.workspace}</span><strong>{m.workspaces[0]}</strong><IconChevronDown size={12} />
          <span className={classes.workspaceOthers}>{m.workspaces.slice(1).join(" / ")}</span>
          <IconSettings size={15} className={classes.settings} />
        </div>
        <div className={classes.body}>
          <aside className={classes.sidebar}>
            <div className={classes.groupLabel}><IconStar size={11} />{m.sidebar.favorites}</div>
            {m.favorites.map((label, i) => {
              const ItemIcon = favoriteIcons[i % favoriteIcons.length];
              return <div key={label} className={classes.item}><ItemIcon size={14} />{label}</div>;
            })}
            <div className={classes.groupLabel}>{m.sidebar.locations}</div>
            {m.tree.map((node) => (
              <div key={node.label}>
                <div className={classes.item}><IconChevronDown size={12} /><IconFolder size={14} />{node.label}</div>
                {node.children?.map((child, i) => (
                  <div key={child.label} className={classes.item} data-active={i === 0 || undefined} style={{ paddingLeft: 28 }}>
                    <IconFolder size={14} />{child.label}
                  </div>
                ))}
              </div>
            ))}
            <div className={classes.item}><IconServer size={14} />{m.locations[1]}</div>
            <div className={classes.groupLabel}>{m.sidebar.tags}</div>
            {m.tags.map((label, i) => <div key={label} className={classes.item}><span className={classes.tag} style={{ background: tagColors[i] }} />{label}</div>)}
          </aside>
          <div className={classes.main}>
            <div className={classes.tabs}>
              {m.tabs.map((tab, i) => <span key={tab} data-active={i === 0 || undefined}><IconFolder size={12} />{tab}</span>)}
              <span className={classes.tabAdd}>+</span>
            </div>
            <div className={classes.toolbar}>
              <IconArrowLeft size={14} /><IconArrowRight size={14} /><Breadcrumbs items={scene.breadcrumb} /><IconLayoutGrid size={15} />
            </div>
            <div className={classes.filter}><IconSearch size={13} /><span>{m.searchPlaceholder}</span><span className={classes.key}>/</span></div>
            <FileGrid files={m.files} />
            <div className={classes.status}>{m.statusBar}</div>
          </div>
          <div className={classes.secondary}>
            <div className={classes.secondaryHeader}>
              {variant === "connections" ? <IconServer size={14} /> : <IconFolder size={14} />}
              <span>{isDualPane ? scene.secondaryBreadcrumb.at(-1) : scene.label}</span>
              {isDualPane && <IconList size={14} />}
            </div>
            <div className={classes.toolbar}><Breadcrumbs items={scene.secondaryBreadcrumb} /></div>
            {isDualPane ? (
              <>
                {variant === "connections" && <div className={classes.connection}><span />{scene.detail}</div>}
                <div className={classes.columnHeaders}><span>{m.columns[0]}</span><span>{m.columns[1]}</span></div>
                <div className={classes.fileList}>
                  {m.secondaryFiles.map((file) => {
                    const kind = fileKinds[file.kind];
                    const KindIcon = kind.icon;
                    return <div key={file.name} className={classes.listRow}><KindIcon size={17} color={kind.color} stroke={1.6} /><span>{file.name}</span><span>{file.meta}</span></div>;
                  })}
                </div>
                <div className={classes.status}>{m.secondaryStatusBar}</div>
              </>
            ) : (
              <div className={classes.sceneContent}>
                {variant === "preview" ? (
                  <>
                    <div className={classes.previewArt}><div className={classes.art} /></div>
                    <strong className={classes.sceneTitle}>{scene.label}</strong><span className={classes.fileMeta}>{scene.detail}</span>
                    <div className={classes.metadata}>{scene.rows.map((row) => <div key={row.label}><span>{row.label}</span><span>{row.value}</span></div>)}</div>
                  </>
                ) : variant === "search" ? (
                  <>
                    <div className={classes.query}><IconSearch size={16} /><strong>{scene.label}</strong></div>
                    <p className={classes.sceneDetail}>{scene.detail}</p>
                    <div className={classes.results}>{scene.rows.map((row) => <div key={row.label}><IconFileText size={17} /><div><strong>{row.label}</strong><p>{row.value.split(scene.label).map((part, i) => <span key={i}>{i > 0 && <mark>{scene.label}</mark>}{part}</span>)}</p></div></div>)}</div>
                  </>
                ) : variant === "operations" ? (
                  <>
                    <strong className={classes.sceneTitle}>{scene.label}</strong><p className={classes.sceneDetail}>{scene.detail}</p>
                    <div className={classes.renameRows}>{scene.rows.map((row) => <div key={row.label}><span>{row.label}</span><IconArrowRight size={15} /><strong>{row.value}</strong><IconCheck size={14} /></div>)}</div>
                  </>
                ) : variant === "workspaces" ? (
                  <>
                    <strong className={classes.sceneTitle}>{scene.label}</strong><p className={classes.sceneDetail}>{scene.detail}</p>
                    <div className={classes.workspaceRows}>{scene.rows.map((row, i) => <div key={row.label} data-active={i === 0 || undefined}><IconLayoutColumns size={22} /><div><strong>{row.label}</strong><span>{row.value}</span></div><span className={classes.key}>{i + 1}</span></div>)}</div>
                  </>
                ) : variant === "organize" ? (
                  <>
                    <strong className={classes.sceneTitle}>{scene.label}</strong><p className={classes.sceneDetail}>{scene.detail}</p>
                    <div className={classes.sizeRows}>{scene.rows.map((row, i) => <div key={row.label}><div><IconFolder size={15} /><span>{row.label}</span><strong>{row.value}</strong></div><span className={classes.sizeTrack}><span style={{ width: `${[88, 49, 26, 12][i]}%`, background: ["#34d399", "#22d3ee", "#a78bfa", "#fbbf24"][i] }} /></span></div>)}</div>
                  </>
                ) : (
                  <>
                    <strong className={classes.sceneTitle}>{scene.label}</strong><p className={classes.sceneDetail}>{scene.detail}</p>
                    <div className={classes.themeGrid}>{scene.rows.map((row, i) => <div key={row.label} data-active={i === 0 || undefined}><div className={classes.themeSample} style={{ "--swatch": row.value } as React.CSSProperties}><span /><span /><span /></div><span>{row.label}</span>{i === 0 && <IconCheck size={12} />}</div>)}</div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
        <div className={classes.actionbar}>{m.actions.map((action, i) => <span key={action}><span className={classes.key}>{["F5", "F6", "Space"][i]}</span>{action}</span>)}</div>
      </div>
      <figcaption className={classes.caption}><span>{m.caption}</span><span>{scene.caption}</span></figcaption>
    </figure>
  );
}
