using System;

namespace DataLayer
{
    public interface IUnitofWork : IDisposable
    {
        IMovieRepository Movies { get; }
        IMovieEvents MovieEvents { get; }
        int Complete();
    }
}
