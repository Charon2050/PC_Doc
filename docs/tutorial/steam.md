# 指南：安装并使用 Steam 平台

Steam 是全球最大的游戏平台，可在其中购买和下载游戏。

首先，应确保自己有一台 Windows 系统的电脑（[如何判断自己的系统？](/concept/computer#操作系统)）。手机无法运行 Steam 中购买的游戏，而苹果电脑的 MacOS 系统支持的游戏极少。

## 一、下载、安装加速器

### 1. 下载加速器安装包

由于 Steam 是国外平台，网络连接并不稳定，因此，需要使用加速器加速网络。此教程以免费的 Watt Toolkit（瓦特工具箱，原名 Steam++）为例。

使用电脑浏览器进入 Watt Toolkit 下载页：https://gitee.com/rmbgame/SteamTools/releases/latest

::: tip :link: Watt Toolkit 下载页
https://gitee.com/rmbgame/SteamTools/releases/latest
:::

（[不知道怎么进入，或无法下载？请点这里](/tutorial/visit_web)）

翻到页面末尾，点击以「win_x64.exe」结尾的文件，即可开始下载

![1](/pic/watt_toolkit_3_0_0_in_gitee.png)

开始下载时，浏览器会弹出一个提示，告知「xx 可能会损害你的设备。是否仍要保留？」这是因为安装包是来自于网络中的程序，电脑认为这是个“陌生人”，因此发出警告。但是我们知道，Watt Toolkit 是个安全的加速器，并不是病毒，所以可以放心的点「**保留**」。

![2](/pic/edge_download_security_warning.png)

下载完成后，再点一下这个安装包，就可以开始安装了。

![3](/pic/edge_download_watt_toolkit_complete.png)

打开安装包前，电脑弹出提示「你要允许此应用对你的设备进行更改吗？」，原因和上面一样，电脑认为这个程序是“陌生人”，因此发出警告。点击「**是**」即可。

![4](/pic/watt_toolkit_uac_warning.png)

### 2. 安装加速器

::: tip :bulb: 防垃圾软件三字经
搜官网，查名称，防捆绑，关自启。
:::

安装界面显示的软件名称为「Steam++」，这是 Watt Toolkit 的原名。
检查界面四周，没有发现捆绑软件的勾选框。因此，我们直接点击「立即安装」即可。

::: details 把软件安装到 C 盘没关系吗？
在 Windows 系统中，往往存在 C 盘、D 盘等多个“盘”，这些“盘”的正式名称是「分区」。

在以前，电脑普遍采用机械硬盘，且系统并不稳定，时常需要重装系统，因此，人们往往将一个硬盘的空间分成多个分区，如：将一个 500 GB 的硬盘分为 150 GB 的 C 盘和 350 GB 的 D 盘。在以前，这样的分区方式有多种益处。

然而，在 2024 年的今天，电脑已经普遍采用固态硬盘，且系统也十分稳定，不再需要频繁的重装系统。因此，对于普通用户来说，分区是没有意义的，甚至可能有害（占用比例提高导致性能下降、C 盘被占满等）。因此，**并不建议普通用户给自己的硬盘分区**，「一个 C 盘用到死」的做法是完全可行的。
:::

![5](/pic/watt_toolkit_install_start.png)

等待进度条走完之后，下面的按钮显示「立即体验」，说明安装完成了。点击「立即体验」按钮，打开 Watt Toolkit。

![6](/pic/watt_toolkit_install_complete.png)

第一次打开软件后，不要忘了关闭「设置」-「开机自启动」的开关，防止软件在电脑开机时自动运行，拖慢开机速度。

![7](/pic/watt_toolkit_disable_autostart.png)

## 二、启用加速器

在 Watt Toolkit 中，点击「网络加速」- 勾选「Steam 服务」和「国外验证码平台」- 一键加速，就可以启用 Steam 加速功能。

![8](/pic/watt_toolkit_onekey_proxy.png)

第一次加速时，系统会弹出「是否要允许公共网络和专用网络访问此应用？」的警告。原因和上面一样，电脑认为这个程序是“陌生人”，因此发出警告。点击「**允许**」即可。

![9](/pic/watt_toolkit_firewall_warning.png)

Watt Toolkit 来到「流量统计」页面，说明加速成功了。加速期间，我们的电脑可以正常访问 Steam。

![10](/pic/watt_toolkit_traffic.png)

## 三、下载、安装 Steam

### 1. 下载 Steam 安装包

使用电脑浏览器进入 Steam 的下载页：https://store.steampowered.com/about/

::: tip :link: Steam 下载页
https://store.steampowered.com/about/
:::

::: warning :warning: 注意
请从上方链接下载 Steam，避免使用百度搜索 Steam。百度搜索 Steam 的结果包含大量仿冒网站。
:::

（[不知道怎么进入，或无法下载？请点这里](/tutorial/visit_web)）

点击蓝色的「安装 Steam」按钮，即可下载 Steam 安装包。

![11](/pic/steam_download_page.png)

开始下载时，浏览器会弹出一个提示，告知「SteamSetup.exe可能会损害你的设备。是否仍要保留？」点击「**保留**」继续下载。

![12](/pic/steam_download_security_warning.png)

下载完成后，再点一下这个安装包，就可以开始安装了。

![13](/pic/steam_download_complete.png)

### 2. 安装 Steam

打开安装包前，电脑弹出提示「你要允许此应用对你的设备进行更改吗？」，原因和上面一样，电脑认为这个程序是“陌生人”，因此发出警告。点击「**是**」即可。

![14](/pic/steam_uac_warning.png)

::: tip :bulb: 防垃圾软件三字经
搜官网，查名称，防捆绑，关自启。
:::

安装界面显示的软件名称为「Steam」。检查界面四周，没有发现捆绑软件的勾选框。

因此，我们点击「下一步」。

![15](/pic/steam_install_start.png)

然后选中「简体中文」，点击「下一步」。

![16](/pic/steam_install_language.png)

在这一步中，可以选择安装位置。直接点「安装」即可。

::: details 把软件安装到 C 盘没关系吗？
在 Windows 系统中，往往存在 C 盘、D 盘等多个“盘”，这些“盘”的正式名称是「分区」。

在以前，电脑普遍采用机械硬盘，且系统并不稳定，时常需要重装系统，因此，人们往往将一个硬盘的空间分成多个分区，如：将一个 500 GB 的硬盘分为 150 GB 的 C 盘和 350 GB 的 D 盘。在以前，这样的分区方式有多种益处。

然而，在 2024 年的今天，电脑已经普遍采用固态硬盘，且系统也十分稳定，不再需要频繁的重装系统。因此，对于普通用户来说，分区是没有意义的，甚至可能有害（占用比例提高导致性能下降、C 盘被占满等）。因此，**并不建议普通用户给自己的硬盘分区**，「一个 C 盘用到死」的做法是完全可行的。
:::

（如果想要把 Steam 安装到 D 盘，可以点击「浏览」，在 D 盘新建一个名为「Steam」的文件夹，点进这个文件夹，然后确认）

![17](/pic/steam_install_location.png)

最后，点击「完成」即可。

![18](/pic/steam_install_complete.png)

::: details 其它安装方法？

1. 您也可以前往微软商店安装 Steam（此安装包为第三方上传）：https://apps.microsoft.com/store/detail/XPFCS1RGWBMTTG

2. 您也可以使用 Winget 来安装 Steam：右键「开始」按钮，打开「终端」，输入：```winget install Valve.Steam```，然后按下回车键。

:::

## 四、注册 Steam 帐户

Steam 需要一个帐户才能购买、游玩游戏，因此，打开 Steam 后，我们点右下角的「创建免费帐户」去注册账号。

![19](/pic/steam_register_start.png)

Steam 是国际平台，无法使用手机号、QQ、微信注册，必须使用**电子邮箱**。如果您没有电子邮箱，请参考 [这篇教程](/tutorial/email)，注册一个电子邮箱。

::: tip :bulb: QQ 邮箱的默认邮件地址是 ```QQ号@qq.com```。
比如张三的 QQ 号是 123456，则张三的邮件地址是 ```123456@qq.com```。
:::

在「电子邮件地址」和「确认您的电子邮件地址」2 处，填写您的电子邮件地址。

![20](/pic/steam_register_email.png)

如果下方存在「进行人机身份验证」的按钮，就点击这个按钮，并按照要求进行验证。如果没有这个按钮，就跳过这一步。

![21](/pic/steam_register_recaptcha.png)

![22](/pic/steam_register_recaptcha_opration.png)

勾选「我已年满 13 周岁并同意《Steam 订户协议》和《Valve 隐私政策》的条款」并点击「继续」按钮。

![23](/pic/steam_register_agreement.png)

页面提示「验证您的电子邮件」。

![24](/pic/steam_register_wait_verify_email.png)

::: warning :warning: 注意
现在**不可以**点击右上角的「×」按钮。
:::

为了查阅 Steam 给我们发送的电子邮件，我们需要查阅电子邮箱的收件箱。此处以 QQ 邮箱为例。使用电脑浏览器进入 QQ 邮箱：https://mail.qq.com/

::: tip :link: QQ 邮箱
https://mail.qq.com/
:::

使用 QQ 登录，就可以进入邮箱了。

点击左侧「收件箱」，找到名为「新 Steam 帐户电子邮件验证」的邮件，点击进入。

![25](/pic/qqmail_receive_steam_verify.png)

在邮件中，点击蓝色「验证我的电子邮件地址」按钮。

![26](/pic/qqmail_verify_steam.png)

QQ 邮箱弹出安全提示，点击「继续访问」。

![27](/pic/qqmail_redirect.png)

看到如图所示的「电子邮件已验证」提示后，就可以关闭这个页面了。

![28](/pic/steam_email_verified.png)

现在，回到刚才的 Steam 窗口，发现界面已经变成了「创建您的帐户」。

在「Steam 账户名称」一栏输入自己想使用的 Steam 名称（只能使用英文字母、数字和下划线 ```_```），在「选择密码」和「确认密码」一栏设定密码。最后点击完成。

::: warning :warning: 注意
必须记住自己的名称和密码。请不要随意输入自己容易忘记的名称和密码。
:::

![29](/pic/steam_register_creat_account.png)

弹出「新帐户创建成功」，说明成功注册了 Steam 账号。点击「继续」按钮。

![30](/pic/steam_register_complete.png)

## 五、登录 Steam 帐户

来到 Steam 登录界面，输入刚才设置的名称和密码，点击蓝色的「登录」按钮。

![31](/pic/steam_login.png)

来到这样的商店页面，大功告成，我们成功的用上了 Steam。

![32](/pic/steam_index.png)

如果出现了这样的错误代码，请不要紧张，这是常见的的网络波动问题。可以[使用加速器](#一、下载、安装加速器)来避免这类问题。
