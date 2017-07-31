namespace DataLayer
{
    public class UnitOfWork : IUnitofWork
    {
        private readonly MovieContext _context;

        public UnitOfWork(MovieContext context)
        {
            _context = context;
            Movies = new MovieRepository(_context);
            MovieEvents = new MovieEventRepository(_context);
        }

        public IMovieRepository Movies { get; private set; }
        public IMovieEvents MovieEvents { get; private set; }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
