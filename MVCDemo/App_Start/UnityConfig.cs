using System.Web.Http;
using System.Web.Mvc;
using DataLayer;
using Microsoft.Practices.Unity;
using Unity.Mvc5;
using Unity.WebApi;

namespace MVCDemo
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            
            container.RegisterType<IUnitofWork, UnitOfWork>();
            
            DependencyResolver.SetResolver(new Unity.Mvc5.UnityDependencyResolver(container));
            GlobalConfiguration.Configuration.DependencyResolver = new Unity.WebApi.UnityDependencyResolver(container);
        }
    }
}