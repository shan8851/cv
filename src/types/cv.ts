export type ContactLink = {
  readonly label: string;
  readonly url: string;
  readonly icon: 'email' | 'github' | 'twitter' | 'web';
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

export type PublicWork = {
  readonly title: string;
  readonly url: string;
};

export type CVData = {
  readonly name: string;
  readonly title: string;
  readonly contacts: ReadonlyArray<ContactLink>;
  readonly summary: string;
  readonly skills: ReadonlyArray<string>;
  readonly communityAndMentorship: ReadonlyArray<string>;
  readonly experience: ReadonlyArray<Experience>;
  readonly earlierRoles: ReadonlyArray<EarlierRole>;
  readonly publicWork: ReadonlyArray<PublicWork>;
};
