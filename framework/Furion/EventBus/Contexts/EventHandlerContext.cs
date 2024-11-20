﻿// ------------------------------------------------------------------------
// 版权信息
// 版权归百小僧及百签科技（广东）有限公司所有。
// 所有权利保留。
// 官方网站：https://baiqian.com
//
// 许可证信息
// Furion 项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。
// 许可证的完整文本可以在源代码树根目录中的 LICENSE-APACHE 和 LICENSE-MIT 文件中找到。
// 官方网站：https://furion.net
//
// 使用条款
// 使用本代码应遵守相关法律法规和许可证的要求。
//
// 免责声明
// 对于因使用本代码而产生的任何直接、间接、偶然、特殊或后果性损害，我们不承担任何责任。
//
// 其他重要信息
// Furion 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。
// 有关 Furion 项目的其他详细信息，请参阅位于源代码树根目录中的 COPYRIGHT 和 DISCLAIMER 文件。
//
// 更多信息
// 请访问 https://gitee.com/dotnetchina/Furion 获取更多关于 Furion 项目的许可证和版权信息。
// ------------------------------------------------------------------------

using Furion.ClayObject;
using System.Reflection;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Furion.EventBus;

/// <summary>
/// 事件处理程序上下文
/// </summary>
public abstract class EventHandlerContext
{
    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="eventSource">事件源（事件承载对象）</param>
    /// <param name="properties">共享上下文数据</param>
    /// <param name="handlerMethod">触发的方法</param>
    /// <param name="attribute">订阅特性</param>
    internal EventHandlerContext(IEventSource eventSource
        , IDictionary<object, object> properties
        , MethodInfo handlerMethod
        , EventSubscribeAttribute attribute)
    {
        Source = eventSource;
        Properties = properties;
        HandlerMethod = handlerMethod;
        Attribute = attribute;
    }

    /// <summary>
    /// 事件源（事件承载对象）
    /// </summary>
    public IEventSource Source { get; }

    /// <summary>
    /// 共享上下文数据
    /// </summary>
    public IDictionary<object, object> Properties { get; set; }

    /// <summary>
    /// 触发的方法
    /// </summary>
    /// <remarks>如果是动态订阅，可能为 null</remarks>
    public MethodInfo HandlerMethod { get; }

    /// <summary>
    /// 订阅特性
    /// </summary>
    /// <remarks><remarks>如果是动态订阅，可能为 null</remarks></remarks>
    public EventSubscribeAttribute Attribute { get; }

    /// <summary>
    /// 获取负载数据
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <returns></returns>
    public T GetPayload<T>()
    {
        var rawPayload = Source.Payload;

        if (rawPayload is null)
        {
            return default;
        }
        else if (rawPayload is JsonElement jsonElement)
        {
            return JsonSerializer.Deserialize<T>(jsonElement.GetRawText(), new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
        }
        else
        {
            return (T)rawPayload;
        }
    }
}