export interface Course {
  id: string;
  title: string;
  description: string;
  iconName: 'smart_display' | 'psychology_alt' | 'campaign' | 'rss_feed' | 'article';
  tags: string[];
  accentColor: 'green' | 'blue' | 'orange';
}

export interface Channel {
  id: string;
  name: string;
  handle: string;
  iconName: 'play_circle' | 'description' | 'language' | 'share';
  url: string;
  backgroundColor: string;
  textColor: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactForm {
  fullName: string;
  email: string;
  inquiryType: string;
  message: string;
}
