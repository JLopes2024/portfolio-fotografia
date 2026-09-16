import styles from "./SectionLabel.module.css";

type SectionLabelProps = {
  children: React.ReactNode;
};

export default function SectionLabel({
  children,
}: SectionLabelProps) {
  return <span className={styles.label}>{children}</span>;
}