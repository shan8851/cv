export type ContactLink = {
  readonly label: string;
  readonly url: string;
  readonly icon: 'email' | 'github' | 'twitter' | 'web';
};

export type CoreStrength = {
  readonly label: string;
  readonly detail: string;
};

export type Experience = {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly bullets: ReadonlyArray<string>;
};

export type EarlierRole = {
  readonly title: string;
  readonly period: string;
};

export type ToolingWork = {
  readonly title: string;
  readonly description: string;
  readonly url?: string;
};

export type PublicWork = {
  readonly title: string;
  readonly url: string;
};

export type CVData = {
  readonly name: string;
  readonly title: string;
  readonly contacts: ReadonlyArray<ContactLink>;
  readonly summary: string;
  readonly strengths: ReadonlyArray<CoreStrength>;
  readonly experience: ReadonlyArray<Experience>;
  readonly earlierRoles: ReadonlyArray<EarlierRole>;
  readonly toolingWork: ReadonlyArray<ToolingWork>;
  readonly publicWork: ReadonlyArray<PublicWork>;
};
