import useBaseUrl from "@docusaurus/useBaseUrl";
import TOCItems from "@theme/TOCItems";
import clsx from "clsx";
import React, { useContext } from "react";
import GlobalContext from "../../components/GlobalContext";
import { SponsorToc } from "../../components/SponsorToc";
import styles from "./styles.module.css";

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";
export default function TOC({ className, ...props }) {
  const { adv } = useContext(GlobalContext);

  return (
    <div className={clsx(styles.tableOfContents, "thin-scrollbar", className)}>
      {adv && <DotNETChina />}
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </div>
  );
}

function DotNETChina() {
  return (
    <>
      <SponsorToc />
      <a
        href="https://gitee.com/dotnetchina"
        target="_blank"
        style={{ display: "block", position: "relative" }}
        title="了解 dotNET China 组织"
      >
        <img
          src={useBaseUrl("img/chinadotnet.png")}
          style={{ display: "block", width: "90%", margin: "0 auto" }}
        />
      </a>
    </>
  );
}
