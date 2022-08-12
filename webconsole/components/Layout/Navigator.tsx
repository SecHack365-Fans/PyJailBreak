/** @format */

import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./Navigator.module.css";

const Navigator: React.FC = () => (
  <Stack spacing={1} direction="row" className={styles.navbar}>
    <span className={styles.left}>
      <Link href="/" passHref>
        <Button variant="text" className={styles.button}>
          <img
            src="/PyJailBreak/logo_horizontal_cleanness.png"
            alt="top page"
            className={styles.logo}
          />
        </Button>
      </Link>
      <Link href="/openapi" passHref>
        <Button variant="text" className={styles.button}>
          <CloudUploadIcon className={styles.icon} /> API
        </Button>
      </Link>
    </span>
    <span className={styles.right}>
      <a
        href="https://github.com/SecHack365-Fans/PyJailBreak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="text" className={styles.button}>
          <GitHubIcon className={styles.icon} />
        </Button>
      </a>
    </span>
  </Stack>
);

export default Navigator;
