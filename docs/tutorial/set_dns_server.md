# 指南：修改 DNS 服务器

[DNS](/concept/dns) 是上网所必需的服务，一般会由网关自动配置，如果出现问题，会表现为**可以登录微信等软件，但没法在浏览器中打开网页**。这时，就需要手动修改 DNS 服务器。

首先，我们需要一个可靠的 DNS 地址。可以选择一些大型公司提供的 DNS 地址：

- 腾讯 `119.29.29.29`
- 阿里巴巴 `223.5.5.5`
- 阿里巴巴 `223.6.6.6`
- 百度 `180.76.76.76`
- CNNIC `1.2.4.8`
- CNNIC `210.2.4.8`
- Google `8.8.8.8`
- Google `8.8.4.4`
- Cloudflare `1.1.1.1`

考虑到在中国大陆使用国内的服务速度更快，此处以阿里巴巴的 DNS `223.5.5.5` 和 `223.6.6.6` 为例。

右键点击任务栏上的网络图标，点击「网络和 Internet 设置」，在弹出的设置窗口中点击「以太网」。

![](/pic/ethernet_settings.png)

在面板中，点击 DNS 服务器分配旁边的「编辑」按钮。

![](/pic/edit_dns.png)

将「首选 DNS」和「备用 DNS」设置为刚才选用的 `223.5.5.5` 和 `223.6.6.6`，然后点击保存。

![](/pic/set_ali_dns.png)

保存后，打开网页试一下，发现可以正常打开，说明 DNS 配置正确。