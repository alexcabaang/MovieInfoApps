using System.Web.Mvc;
using DataLayer;
using Microsoft.Practices.Unity;
using Model;
using MVCDemo.Infrastructure;


namespace MVCDemo
{
    public static class IocConfigurator
    {

        public static void ConfigureIocUnityContainer()
        {
            IUnityContainer container = new UnityContainer();
            RegisterServices(container);
            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }

        private static void RegisterServices(IUnityContainer container)
        {
            container.RegisterType<IUnitofWork, UnitOfWork>();
        }
    }
}