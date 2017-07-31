using System.Data.Entity;
using Model;

namespace DataLayer
{
    public class MovieContext : DbContext
    {
        public MovieContext() : base("MovieConnection")
        {
            
        }

        public DbSet<Movie>Movies { get; set; }
        public DbSet<Artist>Artists { get; set; }
        public DbSet<MovieEvent>MovieEvents { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            var movieTableModel = modelBuilder.Entity<Movie>();
            movieTableModel.HasKey(m => m.Id);
            movieTableModel.Property(m => m.MovieName).IsRequired().HasMaxLength(100);
            movieTableModel.Property(m => m.MovieStar).IsRequired().HasMaxLength(50);
            movieTableModel.Property(m => m.ImageUrl).IsRequired();
            //modelBuilder.Configurations.Add(new MovieConfiguration());
        }

    }
}
