import { en } from "./en";
import { de } from "./de";
import { pl } from "./pl";
import type { Content, Lang } from "./types";

export { LANGS, LANG_HREF, LANG_LABEL } from "./types";
export type { Content, Lang };

export const CONTENT: Record<Lang, Content> = { en, de, pl };
