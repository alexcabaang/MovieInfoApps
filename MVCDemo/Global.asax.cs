using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using Microsoft.Practices.Unity.Configuration;

namespace MVCDemo
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            UnityConfig.RegisterComponents();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            //IocConfigurator.ConfigureIocUnityContainer();
        }

    }
}
