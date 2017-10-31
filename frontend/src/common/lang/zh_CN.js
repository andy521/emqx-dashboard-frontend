import zhLocale from 'element-ui/lib/locale/lang/zh-CN'


export default {
  ...zhLocale,
  // 全局
  select: {
    cluster: '全部节点',
    placeholder: '请选择',
  },
  error: {
    networkError: '网络错误',
  },
  // leftbar
  leftbar: {
    // MONITORING
    monitoring: '监控',
    overview: '控制台',
    clients: '连接',
    sessions: '会话',
    routes: '路由',
    subscriptions: '订阅',
    // MANAGEMENT
    management: '管理',
    plugins: '插件',
    listeners: '监听器',
    // TOOLS
    tools: '工具',
    websocket: 'Websocket',
    api: 'HTTP接口',
    // ADMIN
    admin: '系统',
    users: '用户',
    settings: '设置',
  },
  // overview
  overview: {
    // Broker
    broker: '系统信息',
    systemName: '名称',
    version: '版本',
    uptime: '运行时间',
    systemTime: '系统时间',
    // Nodes
    nodes: '节点信息',
    name: '节点名称',
    erlangProcesses: 'Erlang进程',
    cpuInfo: 'CPU',
    memoryInfo: '内存',
    maxFds: '最大文件句柄数',
    status: '状态',
    // Stats
    stats: '运行统计',
    clientsCount: '连接数',
    clientsMax: '连接峰值',
    retainedCount: '保留消息数',
    retainedMax: '最大保留消息数',
    routesCount: '路由数',
    routesMax: '路由峰值',
    sessionsCount: '会话数',
    sessionsMax: '会话峰值',
    subscribersCount: '订阅数',
    subscribersMax: '订阅峰值',
    topicsCount: '主题数',
    topicsMax: '主题峰值',
    // Metrics
    metrics: '度量指标',
    packetsData: 'MQTT报文',
    messagesData: '消息(数)',
    bytesData: '流量收发统计(字节)',
  },
  // Clients
  clients: {
    node: '节点',
    clientId: '客户端ID',
    username: '用户名',
    ipAddr: 'IP地址',
    port: '端口',
    cleanSess: '清除会话',
    protoVer: '协议版本',
    keepalive: '心跳(秒)',
    connectedAt: '连接时间',
    back: '返回',
  },
  // sessions
  sessions: {
    clientId: '客户端ID',
    cleanSess: '清除会话',
    subscriptions: '订阅数',
    maxInflight: '最大拥塞',
    inflightLen: '当前拥塞',
    mqueueLen: '当前缓存消息',
    mqueueDropped: '丢弃消息',
    awaitingRelLen: '等待释放',
    deliverMsg: '投递消息',
    enqueueMsg: '入队消息',
    createdAt: '创建时间',
  },
  // routes
  routes: {
    topic: '主题',
    node: '节点',
  },
  // subscriptions
  subscriptions: {
    clientId: '客户端ID',
    topic: '主题',
    qoS: '服务质量',
  },
  // plugins
  plugins: {
    name: '插件名称',
    version: '版本',
    description: '描述',
    status: '状态',
    stopped: '已停止',
    running: '运行中',
    oper: '操作',
    start: '启动',
    stop: '停止',
    config: '配置',
    back: '返回',
    confirm: '确认',
    cancel: '取消',
    advancedConfig: '高级配置',
    add: '新增',
    configSuccess: '配置成功',
    configFailure: '配置失败',
    notice: '你确定提交这些配置吗？重启插件后生效',
    giveUpNotice: '你确定放弃应用已更改的配置吗？',
    noticeTitle: '注意',
    cacheNotice: '已放弃操作',
    emptyConfigOption: '默认配置项为空',
  },
  // listeners
  listeners: {
    protocol: '协议',
    listenOn: '监听地址',
    maxClients: '最大客户端连接数',
    currentClients: '当前客户端连接数',
  },
  // websocket
  websocket: {
    // Connect
    connect: '连接',
    host: '主机地址',
    port: '端口',
    clientID: '客户端ID',
    username: '用户名',
    password: '密码',
    keepAlive: '心跳(秒)',
    cleanSession: '清除会话',
    disconnect: '断开连接',
    currentState: '当前状态',
    // Subscribe
    subscribe: '订阅',
    topic: '主题',
    qoS: '服务质量',
    date: '订阅时间',
    oper: '操作',
    // Messages
    messages: '消息',
    retained: '保留',
    send: '发送',
    messagesAlreadySent: '发布消息列表',
    messagesReceived: '订阅消息列表',
    time: '时间',
    connectError: '错误: 尝试向非法主题发布消息',
    connectFailure: '连接失败',
    connectLeave: '尚未连接到服务器',
    subscribeSuccess: '订阅成功',
    messageSendOut: '消息已发出',
    connected: '已连接',
    connecting: '正在连接',
    disconnected: '未连接',
    notSupport: '你的浏览器暂不支持WebSocket',
  },
  // http_api
  httpApi: {
    introduction: '说明',
    desc: '除了帮助页面，所有URI返回application/json格式的的资源，每个请求都需要HTTP基本认证。默认用户是admin / public。<br/>' +
    'emq_dashboard插件提供了一个Web管理控制台, 用于监控服务器的运行状态，数据统计和MQTT包计数监控。',
    reference: '参考',
    method: '请求方法',
    path: '路径',
    description: '描述',
    back: '返回',
    linkAddress: '请求地址',
    data: '响应数据',
  },
  // users
  users: {
    newUser: '新建用户',
    editUser: '编辑用户',
    username: '用户名',
    remark: '备注',
    password: '密码',
    confirmPassword: '确认密码',
    oldPassword: '旧密码',
    newPassword: '新密码',
    confirmNewPassword: '确认新密码',
    changePassword: '修改密码',
    dontChangePassword: '不修改密码',
    oper: '操作',
    edit: '编辑',
    cancel: '取消',
    save: '保存',
    delete: '删除',
    confirm: '确定',
    confirmDelete: '确认删除',
    usernameRequired: '请填写用户名',
    remarkRequired: '请填写备注',
    usernameIllegal: '用户名长度非法',
    passwordRequired: '请填写密码',
    newPasswordRequired: '请填写新密码',
    passwordInconsistent: '密码不一致',
    authenticate: '你已成功修改已登录用户密码，请重新登录',
    createUser: '新建用户成功',
    errorCode: {
      101: 'badrpc',
      102: '未知错误',
      103: '用户名密码错误',
      104: '用户名密码不能为空',
      105: '删除的用户不存在',
      106: 'admin用户不能删除',
      107: '请求参数缺失',
      108: '请求参数类型错误',
      109: '请求参数不是json类型',
      110: '插件已经加载，不能重复加载',
      111: '插件已经卸载，不能重复卸载',
      112: '用户不在线',
      113: '用户已经存在',
      114: '旧密码错误',
    },
  },
  // alert
  alert: {
    required: '字段是必填项',
    success: '成功',
    failure: '失败',
    connect: '连接',
  },
  // login
  login: {
    title: '登 录',
    username: '用户名',
    password: '密码',
    remember: '记住',
    loginButton: '登 录',
    error: '用户名或密码错误',
    usernameRequired: '请填写用户名',
    passwordRequired: '请填写密码',
  },
  // settings
  settings: {
    themes: '样式主题',
    language: '系统语言',
    apply: '应 用',
    success: '修改成功',
  },
}
