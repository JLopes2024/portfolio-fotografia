import Link from "next/link";

import styles from "./EditorialLink.module.css";

type EditorialLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function EditorialLink({
  href,
  children,
}: EditorialLinkProps) {
  return (
    <Link href={href} className={styles.link}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}