export type MessageType = 'ai' | 'user' | 'system';

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  imageUrl?: string;
  timestamp: Date;
  senderName?: string;
  badge?: string;
}

export interface DiscoveryCard {
  id: string;
  title: string;
  quote: string;
  authorName: string;
  authorAvatar: string;
  venueName: string;
  venueImage: string;
  distance: string;
  tag: string;
}
