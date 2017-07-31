using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Infrastructure.MappingViews;
using System.Linq;


namespace DataLayer
{

    public class GenericRepository<T> where T : class
    {
        private MovieContext _mc = new MovieContext();

        public IEnumerable<T> GetAll()
        {
            return _mc.Set<T>().ToList();
        }

        public T GetById(int id)
        {
            return _mc.Set<T>().Find(id);
        }

        public void Update(T entity)
        {
            _mc.Entry(entity).State = EntityState.Modified;
            try
            {
                _mc.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {

            }
            _mc.SaveChanges();
        }

        public void Insert(T entity)
        {
            _mc.Set<T>().Add(entity);
            _mc.SaveChanges();
        }

        public void Delete(T entity)
        {
            _mc.Set<T>().Remove(entity);
            _mc.SaveChanges();
        }


    }

}
