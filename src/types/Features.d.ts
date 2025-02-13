interface Feature {
  name: string;
  icon: string;
  route: string;
  subFeatures?: SubFeature[];
}

interface SubFeature {
  name: string;
  page: string;
}
