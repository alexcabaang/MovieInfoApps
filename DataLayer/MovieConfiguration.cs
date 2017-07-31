using System.Data.Entity.ModelConfiguration;
using Model;

namespace DataLayer
{
    public class MovieConfiguration : EntityTypeConfiguration<Movie>
    {
        public MovieConfiguration()
        {
            Property(m => m.MovieName).HasMaxLength(100).IsRequired();
            Property(m => m.MovieStar).HasMaxLength(50).IsRequired();
            Property(m => m.Description).HasMaxLength(200).IsRequired();
            Property(m => m.ReleaseDate).IsRequired();
            Property(m => m.Price).IsRequired();
            Property(m => m.ImageUrl).IsRequired();

        }
    }
}
