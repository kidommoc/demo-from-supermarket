import { Message, DiscoveryCard } from './types';

export const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    type: 'ai',
    senderName: 'AI AGENT PORTAL',
    content: '老板，我是你的私人AI助手，我可以帮你记录体验并管理积分。我已经准备好干活了，要记录这一次消费吗？',
    timestamp: new Date(),
  },
  {
    id: '2',
    type: 'user',
    content: 'Receipt uploaded',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkC3G9jOLFmDzZR91vSGwkA-ROvnHT9vwOYmODANdgwtrrt837-Hgi_EQK2YhXMYZPZ8YD48Ftx61c0iYKQI56K3T8V7WPbkcrk3C906GulVoWkMAIGmS_dADVMAffgRCWaZ63cg6bA50uGvpHZ5nTozd6peVDpzTdJ6yw4ic_W8sk7gaDzFDQYkhyFxP1MOuK8sRT42a25jy5mLgtGIw2aKbbkT2e0BlD_CXIQb-NDLghWVh-bzvvQgOPOMwZRFQ8uLCGOPaXvBfN',
    timestamp: new Date(),
  },
  {
    id: '3',
    type: 'ai',
    senderName: 'AI AGENT PORTAL',
    content: '正在扫描小票上的信息... 请稍候。',
    timestamp: new Date(),
  },
  {
    id: '4',
    type: 'ai',
    senderName: 'AI AGENT PORTAL',
    content: '老板，收据已分析完成。您本次消费了 ￥45，为您赚取了 ✧45 奖励。',
    timestamp: new Date(),
  },
  {
    id: '5',
    type: 'ai',
    senderName: 'AI AGENT PORTAL',
    content: '但我现在是个零体验的打工人，没办法为您赚零花钱… 因为超市没有『空间情报』。只要你让我拿着这笔积分去附近锁定一个店，我马上就能开始接单！',
    timestamp: new Date(),
  }
];

export const DISCOVERY_CARDS: DiscoveryCard[] = [
  {
    id: '1',
    title: '水泥墙爱好者',
    quote: '阳光洒在原木桌面上的样子，是这一整天最安静的时刻。',
    authorName: '水泥墙爱好者',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaxVL0GbihmsIFjhkCqGhAnlV8JQVcQYqk0Ab5PGwNKADi9h5BkYLjcUxLGJXSmNy1NREVDmFtfczcifEEoUaHF3QpF5XErUKB2QVrjKJ_SGyR5p0dgFFOusfZgUWjWpCMLdja-LbqzbLkGQSum6mHUpVWx51dOuJPI2rw8GDoV4vChJ8Fxvqr6moba1ioN3DVJgXi8kNCf7OLl_KEna9tkUCFbderCL7tvsTUrPCfeRH7YjFBtRKabyHVXDatjWbGVDqj9SeyH9gi',
    venueName: 'Manner Coffee',
    venueImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzIPMpmf6bjThj8_5EDPzFQOO9rLhAAC4_nw8fJA9B3PDFD1hLdPhtd1ue7RMqQIe_t6IyAreLGckgUwZ6pZOyr6OnMNo2IZU1_mHjT6G2PzH1hoshSff7ehMBPgZgSq6KcL2clGQK3rso_WwfB3gq8Gset5LLeQHZbQYDObQ0GmlD7YcUv8Nul4SvR9EmdiaMT_NB07SRiHAtQI19DaLojyFoPWfgDvov0Pune3mw_USa8Goe2C20npcA9iU7Tr37wavwxjS8N0mO',
    distance: '450m',
    tag: '🤝 同样需要安静办公'
  },
  {
    id: '2',
    title: '爵士乐捕手',
    quote: '这里的低音提琴声，能让你忘记外面喧嚣的街道。',
    authorName: '爵士乐捕手',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIZAWD-VugBF10i2Yj2NRxEAAxsBFX4Le1XDa7sxd9nQTPTXbP7nwo?q=1',
    venueName: 'Blue Note Bar',
    venueImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-BxVkxaOjaMu1rqszkOFTGqal_Kygmpsa2iRi71zXqWaqCLS2OhQ36UnVyU_6bN8fcfi94cRSTIDDZwM95t_AcH3KjGwmxugbJM5-GkWfrqQo46Oc8LxoVbMCLtP4p0Wc_MwpGGLgTTSMHKhZSa8ufLu51CWHhCUrsC3JOYqn_ow6DZrn26wBRcWEctJmRMZosEdC_3iyTD-_-TQ8O9lahlyQfiFzZv1Q3pMT3BZrZu_eeUX6fYsslE3Ssz75DXsW5WlbuIBHXMd9',
    distance: '1.2km',
    tag: '🎹 匹配黑胶收藏'
  }
];
