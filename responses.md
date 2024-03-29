# responses for different functionn calls

## chatInteractionCreate

```js
ChatInputCommandInteraction {
  type: 2,
  id: '1197751403293179975',
  applicationId: '1197255763568111636',
  channelId: '885910388997259274',
  guildId: '843847043474784256',
  user: User {
    id: '446946428158214164',
    bot: false,
    system: false,
    flags: UserFlagsBitField { bitfield: 64 },
    username: 'dinokage',
    globalName: 'Melon Lusk',
    discriminator: '0',
    avatar: '361706911edc4f7d692dbb1fc6769826',
    banner: undefined,
    accentColor: undefined,
    avatarDecoration: null
  },
  member: GuildMember {
    guild: Guild {
      id: '843847043474784256',
      name: "DinoKage's server",
      icon: '0e749f7165aaf471ea5f5eea371362d1',
      features: [Array],
      commands: [GuildApplicationCommandManager],
      members: [GuildMemberManager],
      channels: [GuildChannelManager],
      bans: [GuildBanManager],
      roles: [RoleManager],
      presences: PresenceManager {},
      voiceStates: [VoiceStateManager],
      stageInstances: [StageInstanceManager],
      invites: [GuildInviteManager],
      scheduledEvents: [GuildScheduledEventManager],
      autoModerationRules: [AutoModerationRuleManager],
      available: true,
      shardId: 0,
      splash: null,
      banner: null,
      description: null,
      verificationLevel: 1,
      vanityURLCode: null,
      nsfwLevel: 0,
      premiumSubscriptionCount: 0,
      discoverySplash: null,
      memberCount: 45,
      large: false,
      premiumProgressBarEnabled: false,
      applicationId: null,
      afkTimeout: 300,
      afkChannelId: null,
      systemChannelId: '843847043474784259',
      premiumTier: 0,
      widgetEnabled: null,
      widgetChannelId: null,
      explicitContentFilter: 2,
      mfaLevel: 0,
      joinedTimestamp: 1705529233686,
      defaultMessageNotifications: 1,
      systemChannelFlags: [SystemChannelFlagsBitField],
      maximumMembers: 500000,
      maximumPresences: null,
      maxVideoChannelUsers: 25,
      maxStageVideoChannelUsers: 50,
      approximateMemberCount: null,
      approximatePresenceCount: null,
      vanityURLUses: null,
      rulesChannelId: '913132606265114655',
      publicUpdatesChannelId: '913132606265114656',
      preferredLocale: 'en-US',
      safetyAlertsChannelId: null,
      ownerId: '446946428158214164',
      emojis: [GuildEmojiManager],
      stickers: [GuildStickerManager]
    },
    joinedTimestamp: 1621259213091,
    premiumSinceTimestamp: null,
    nickname: 'Dino Mowa',
    pending: false,
    communicationDisabledUntilTimestamp: null,
    user: User {
      id: '446946428158214164',
      bot: false,
      system: false,
      flags: [UserFlagsBitField],
      username: 'dinokage',
      globalName: 'Melon Lusk',
      discriminator: '0',
      avatar: '361706911edc4f7d692dbb1fc6769826',
      banner: undefined,
      accentColor: undefined,
      avatarDecoration: null
    },
    avatar: null,
    flags: GuildMemberFlagsBitField { bitfield: 0 }
  },
  version: 1,
  appPermissions: PermissionsBitField { bitfield: 562949953421311n },
  memberPermissions: PermissionsBitField { bitfield: 562949953421311n },
  locale: 'en-US',
  guildLocale: 'en-US',
  commandId: '1197301240804155395',
  commandName: 'play',
  commandType: 1,
  commandGuildId: '843847043474784256',
  deferred: false,
  replied: false,
  ephemeral: null,
  webhook: InteractionWebhook { id: '1197255763568111636' },
  options: CommandInteractionOptionResolver {
    _group: null,
    _subcommand: 'song',
    _hoistedOptions: []
  }
}
```

## client.player.queues.create()

```js
<ref *2> GuildQueue {
  player: <ref *1> Player {
    _events: [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    requiredEvents: [ 'error' ],
    id: '1197752141058412544',
    nodes: GuildNodeManager {
      player: [Circular *1],
      cache: [Collection [Map]]
    },
    voiceUtils: VoiceUtils { player: [Circular *1], cache: Collection(0) [Map] {} },
    extractors: ExtractorExecutionContext {
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      requiredEvents: [Array],
      player: [Circular *1],
      store: [Collection [Map]],
      [Symbol(kCapture)]: false
    },
    events: PlayerEventsEmitter {
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      requiredEvents: [Array],
      [Symbol(kCapture)]: false
    },
    routePlanner: null,
    client: Client {
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      options: [Object],
      rest: [REST],
      ws: [WebSocketManager],
      actions: [ActionsManager],
      voice: [ClientVoiceManager],
      shard: null,
      users: UserManager {},
      guilds: GuildManager {},
      channels: ChannelManager {},
      sweepers: [Sweepers],
      presence: [ClientPresence],
      user: [ClientUser],
      application: [ClientApplication],
      readyTimestamp: 1705636765531,
      player: [Circular *1],
      commands: [Collection [Map]],
      [Symbol(kCapture)]: true
    },
    options: {
      lockVoiceStateHandler: false,
      blockExtractors: [],
      blockStreamFrom: [],
      connectionTimeout: 20000,
      lagMonitor: 30000,
      queryCache: [QueryCache],
      useLegacyFFmpeg: false,
      ytdlOptions: [Object]
    },
    [Symbol(kCapture)]: false
  },
  options: {
    guild: Guild {
      id: '843847043474784256',
      name: "DinoKage's server",
      icon: '0e749f7165aaf471ea5f5eea371362d1',
      features: [Array],
      commands: [GuildApplicationCommandManager],
      members: [GuildMemberManager],
      channels: [GuildChannelManager],
      bans: [GuildBanManager],
      roles: [RoleManager],
      presences: PresenceManager {},
      voiceStates: [VoiceStateManager],
      stageInstances: [StageInstanceManager],
      invites: [GuildInviteManager],
      scheduledEvents: [GuildScheduledEventManager],
      autoModerationRules: [AutoModerationRuleManager],
      available: true,
      shardId: 0,
      splash: null,
      banner: null,
      description: null,
      verificationLevel: 1,
      vanityURLCode: null,
      nsfwLevel: 0,
      premiumSubscriptionCount: 0,
      discoverySplash: null,
      memberCount: 45,
      large: false,
      premiumProgressBarEnabled: false,
      applicationId: null,
      afkTimeout: 300,
      afkChannelId: null,
      systemChannelId: '843847043474784259',
      premiumTier: 0,
      widgetEnabled: null,
      widgetChannelId: null,
      explicitContentFilter: 2,
      mfaLevel: 0,
      joinedTimestamp: 1705529233686,
      defau<ref *2> GuildQueue {
  player: <ref *1> Player {
    _events: [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    requiredEvents: [ 'error' ],
    id: '1197752141058412544',
    nodes: GuildNodeManager {
      player: [Circular *1],
      cache: [Collection [Map]]
    },
    voiceUtils: VoiceUtils { player: [Circular *1], cache: Collection(0) [Map] {} },
    extractors: ExtractorExecutionContext {
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      requiredEvents: [Array],
      player: [Circular *1],
      store: [Collection [Map]],
      [Symbol(kCapture)]: false
    },
    events: PlayerEventsEmitter {
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      requiredEvents: [Array],
      [Symbol(kCapture)]: false
    },
    routePlanner: null,
    client: Client {
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      options: [Object],
      rest: [REST],
      ws: [WebSocketManager],
      actions: [ActionsManager],
      voice: [ClientVoiceManager],
      shard: null,
      users: UserManager {},
      guilds: GuildManager {},
      channels: ChannelManager {},
      sweepers: [Sweepers],
      presence: [ClientPresence],
      user: [ClientUser],
      application: [ClientApplication],
      readyTimestamp: 1705636765531,
      player: [Circular *1],
      commands: [Collection [Map]],
      [Symbol(kCapture)]: true
    },
    options: {
      lockVoiceStateHandler: false,
      blockExtractors: [],
      blockStreamFrom: [],
      connectionTimeout: 20000,
      lagMonitor: 30000,
      queryCache: [QueryCache],
      useLegacyFFmpeg: false,
      ytdlOptions: [Object]
    },
    [Symbol(kCapture)]: false
  },
  options: {
    guild: Guild {
      id: '843847043474784256',
      name: "DinoKage's server",
      icon: '0e749f7165aaf471ea5f5eea371362d1',
      features: [Array],
      commands: [GuildApplicationCommandManager],
      members: [GuildMemberManager],
      channels: [GuildChannelManager],
      bans: [GuildBanManager],
      roles: [RoleManager],
      presences: PresenceManager {},
      voiceStates: [VoiceStateManager],
      stageInstances: [StageInstanceManager],
      invites: [GuildInviteManager],
      scheduledEvents: [GuildScheduledEventManager],
      autoModerationRules: [AutoModerationRuleManager],
      available: true,
      shardId: 0,
      splash: null,
      banner: null,
      description: null,
      verificationLevel: 1,
      vanityURLCode: null,
      nsfwLevel: 0,
      premiumSubscriptionCount: 0,
      discoverySplash: null,
      memberCount: 45,
      large: false,
      premiumProgressBarEnabled: false,
      applicationId: null,
      afkTimeout: 300,
      afkChannelId: null,
      systemChannelId: '843847043474784259',
      premiumTier: 0,
      widgetEnabled: null,
      widgetChannelId: null,
      explicitContentFilter: 2,
      mfaLevel: 0,
      joinedTimestamp: 1705529233686,
      defaultMessageNotifications: 1,
      systemChannelFlags: [SystemChannelFlagsBitField],
      maximumMembers: 500000,
      maximumPresences: null,
      maxVideoChannelUsers: 25,
      maxStageVideoChannelUsers: 50,
      approximateMemberCount: null,
      approximatePresenceCount: null,
      vanityURLUses: null,
      rulesChannelId: '913132606265114655',
      publicUpdatesChannelId: '913132606265114656',
      preferredLocale: 'en-US',
      safetyAlertsChannelId: null,
      ownerId: '446946428158214164',
      emojis: [GuildEmojiManager],
      stickers: [GuildStickerManager]
    },
    queueStrategy: 'FIFO',
    volume: 100,
    equalizer: [],
    filterer: [],
    biquad: undefined,
    resampler: 48000,
    disableHistory: false,
    skipOnNoStream: false,
    onBeforeCreateStream: undefined,
    onAfterCreateStream: undefined,
    repeatMode: undefined,
    leaveOnEmpty: true,
    leaveOnEmptyCooldown: 0,
    leaveOnEnd: true,
    leaveOnEndCooldown: 0,
    leaveOnStop: true,
    leaveOnStopCooldown: 0,
    metadata: undefined,
    connectionTimeout: 20000,
    selfDeaf: true,
    ffmpegFilters: [],
    bufferingTimeout: 1000,
    noEmitInsert: false,
    preferBridgedMetadata: true,
    maxHistorySize: Infinity,
    maxSize: Infinity,
    pauseOnEmpty: true
  },
  __current: null,
  history: GuildQueueHistory {
    queue: [Circular *2],
    tracks: Queue {
      strategy: 'LIFO',
      data: []
    }
  },
  dispatcher: null,
  node: GuildQueuePlayerNode {
    queue: [Circular *2],
    tasksQueue: AsyncQueue { entries: [] }
  },
  filters: <ref *3> GuildQueueAudioFilters {
    queue: [Circular *2],
    graph: AFilterGraph { af: [Circular *3] },
    ffmpeg: FFmpegFilterer { af: [Circular *3] },
    equalizerPresets: {
      Flat: [Array],
      Classical: [Array],
      Club: [Array],
      Dance: [Array],
      FullBass: [Array],
      FullBassTreble: [Array],
      FullTreble: [Array],
      Headphones: [Array],
      LargeHall: [Array],
      Live: [Array],
      Party: [Array],
      Pop: [Array],
      Reggae: [Array],
      Rock: [Array],
      Ska: [Array],
      Soft: [Array],
      SoftRock: [Array],
      Techno: [Array]
    },
    _lastFiltersCache: {
      biquad: null,
      equalizer: [],
      filters: [],
      volume: 100,
      sampleRate: 48000
    }
  },
  onBeforeCreateStream: [AsyncFunction: onBeforeCreateStream],
  onAfterCreateStream: [AsyncFunction: onAfterCreateStream],
  repeatMode: 0,
  timeouts: Collection(0) [Map] {},
  stats: GuildQueueStatistics { queue: [Circular *2] },
  tasksQueue: AsyncQueue { entries: [] },
  tracks: Queue {
    strategy: 'FIFO',
    data: []
  }
}ltMessageNotifications: 1,
      systemChannelFlags: [SystemChannelFlagsBitField],
      maximumMembers: 500000,
      maximumPresences: null,
      maxVideoChannelUsers: 25,
      maxStageVideoChannelUsers: 50,
      approximateMemberCount: null,
      approximatePresenceCount: null,
      vanityURLUses: null,
      rulesChannelId: '913132606265114655',
      publicUpdatesChannelId: '913132606265114656',
      preferredLocale: 'en-US',
      safetyAlertsChannelId: null,
      ownerId: '446946428158214164',
      emojis: [GuildEmojiManager],
      stickers: [GuildStickerManager]
    },
    queueStrategy: 'FIFO',
    volume: 100,
    equalizer: [],
    filterer: [],
    biquad: undefined,
    resampler: 48000,
    disableHistory: false,
    skipOnNoStream: false,
    onBeforeCreateStream: undefined,
    onAfterCreateStream: undefined,
    repeatMode: undefined,
    leaveOnEmpty: true,
    leaveOnEmptyCooldown: 0,
    leaveOnEnd: true,
    leaveOnEndCooldown: 0,
    leaveOnStop: true,
    leaveOnStopCooldown: 0,
    metadata: undefined,
    connectionTimeout: 20000,
    selfDeaf: true,
    ffmpegFilters: [],
    bufferingTimeout: 1000,
    noEmitInsert: false,
    preferBridgedMetadata: true,
    maxHistorySize: Infinity,
    maxSize: Infinity,
    pauseOnEmpty: true
  },
  __current: null,
  history: GuildQueueHistory {
    queue: [Circular *2],
    tracks: Queue {
      strategy: 'LIFO',
      data: []
    }
  },
  dispatcher: null,
  node: GuildQueuePlayerNode {
    queue: [Circular *2],
    tasksQueue: AsyncQueue { entries: [] }
  },
  filters: <ref *3> GuildQueueAudioFilters {
    queue: [Circular *2],
    graph: AFilterGraph { af: [Circular *3] },
    ffmpeg: FFmpegFilterer { af: [Circular *3] },
    equalizerPresets: {
      Flat: [Array],
      Classical: [Array],
      Club: [Array],
      Dance: [Array],
      FullBass: [Array],
      FullBassTreble: [Array],
      FullTreble: [Array],
      Headphones: [Array],
      LargeHall: [Array],
      Live: [Array],
      Party: [Array],
      Pop: [Array],
      Reggae: [Array],
      Rock: [Array],
      Ska: [Array],
      Soft: [Array],
      SoftRock: [Array],
      Techno: [Array]
    },
    _lastFiltersCache: {
      biquad: null,
      equalizer: [],
      filters: [],
      volume: 100,
      sampleRate: 48000
    }
  },
  onBeforeCreateStream: [AsyncFunction: onBeforeCreateStream],
  onAfterCreateStream: [AsyncFunction: onAfterCreateStream],
  repeatMode: 0,
  timeouts: Collection(0) [Map] {},
  stats: GuildQueueStatistics { queue: [Circular *2] },
  tasksQueue: AsyncQueue { entries: [] },
  tracks: Queue {
    strategy: 'FIFO',
    data: []
  }
}
```
## search result for yt url

```js
SearchResult {
  player: <ref *1> Player {
    _events: [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    requiredEvents: [ 'error' ],
    id: '1197811940408168448',
    nodes: GuildNodeManager {
      player: [Circular *1],
      cache: [Collection [Map]]
    },
    voiceUtils: VoiceUtils { player: [Circular *1], cache: Collection(0) [Map] {} },
    extractors: ExtractorExecutionContext {
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      requiredEvents: [Array],
      player: [Circular *1],
      store: [Collection [Map]],
      [Symbol(kCapture)]: false
    },
    events: PlayerEventsEmitter {
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      requiredEvents: [Array],
      [Symbol(kCapture)]: false
    },
    routePlanner: null,
    client: Client {
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      options: [Object],
      rest: [REST],
      ws: [WebSocketManager],
      actions: [ActionsManager],
      voice: [ClientVoiceManager],
      shard: null,
      users: UserManager {},
      guilds: GuildManager {},
      channels: ChannelManager {},
      sweepers: [Sweepers],SearchResult {
  player: <ref *1> Player {
    _events: [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    requiredEvents: [ 'error' ],
    id: '1197811940408168448',
    nodes: GuildNodeManager {
      player: [Circular *1],
      cache: [Collection [Map]]
    },
    voiceUtils: VoiceUtils { player: [Circular *1], cache: Collection(0) [Map] {} },
    extractors: ExtractorExecutionContext {
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      requiredEvents: [Array],
      player: [Circular *1],
      store: [Collection [Map]],
      [Symbol(kCapture)]: false
    },
    events: PlayerEventsEmitter {
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      requiredEvents: [Array],
      [Symbol(kCapture)]: false
    },
    routePlanner: null,
    client: Client {
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      options: [Object],
      rest: [REST],
      ws: [WebSocketManager],
      actions: [ActionsManager],
      voice: [ClientVoiceManager],
      shard: null,
      users: UserManager {},
      guilds: GuildManager {},
      channels: ChannelManager {},
      sweepers: [Sweepers],
      presence: [ClientPresence],
      user: [ClientUser],
      application: [ClientApplication],
      readyTimestamp: 1705651022658,
      player: [Circular *1],
      commands: [Collection [Map]],
      [Symbol(kCapture)]: true
    },
    options: {
      lockVoiceStateHandler: false,
      blockExtractors: [],
      blockStreamFrom: [],
      connectionTimeout: 20000,
      lagMonitor: 30000,
      queryCache: [QueryCache],
      useLegacyFFmpeg: false,
      ytdlOptions: [Object]
    },
    [Symbol(kCapture)]: false
  },
  _data: {
    query: 'https://youtu.be/BblraEtrFLI?si=ZdBOXWp8b6FUxHph',
    queryType: 'youtubeVideo',
    playlist: null,
    tracks: [ [Track] ],
    extractor: YoutubeExtractor {
      context: [ExtractorExecutionContext],
      options: {},
      createBridgeQuery: [Function: createBridgeQuery],
      protocols: [Array],
      _stream: [AsyncFunction: _stream],
      _ytLibName: 'youtube-ext'
    },
    requestedBy: undefined
  }
}
      presence: [ClientPresence],
      user: [ClientUser],
      application: [ClientApplication],
      readyTimestamp: 1705651022658,
      player: [Circular *1],
      commands: [Collection [Map]],
      [Symbol(kCapture)]: true
    },
    options: {
      lockVoiceStateHandler: false,
      blockExtractors: [],
      blockStreamFrom: [],
      connectionTimeout: 20000,
      lagMonitor: 30000,
      queryCache: [QueryCache],
      useLegacyFFmpeg: false,
      ytdlOptions: [Object]
    },
    [Symbol(kCapture)]: false
  },
  _data: {
    query: 'https://youtu.be/BblraEtrFLI?si=ZdBOXWp8b6FUxHph',
    queryType: 'youtubeVideo',
    playlist: null,
    tracks: [ [Track] ],
    extractor: YoutubeExtractor {
      context: [ExtractorExecutionContext],
      options: {},
      createBridgeQuery: [Function: createBridgeQuery],
      protocols: [Array],
      _stream: [AsyncFunction: _stream],
      _ytLibName: 'youtube-ext'
    },
    requestedBy: undefined
  }
}

```
