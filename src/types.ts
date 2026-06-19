export interface SolutionItem {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  details: string[];
}

export interface SystemModuleItem {
  id: string;
  title: string;
  subTitle: string;
  desc: string;
  features: string[];
}

export interface AISquadMemberItem {
  id: string;
  role: string;
  name: string;
  tag: string;
  desc: string;
  capabilities: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  tools: string[];
  image: string;
}

export interface TimelineNode {
  id: string;
  step: string;
  title: string;
  desc: string;
  completionRate: string;
}

