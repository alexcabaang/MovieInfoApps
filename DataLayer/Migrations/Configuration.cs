using System;
using Model;

namespace DataLayer.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<DataLayer.MovieContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(DataLayer.MovieContext context)
        {
            /*     
            context.Movies.AddOrUpdate(
                m => m.MovieName,
                new MovieModel
                {
                    MovieName = "The Terminator", MovieStar = "Arnold Schwarzenegger",
                    Description = "",
                    ReleaseDate =  DateTime.Parse("6/22/1984"), Price = (decimal)9.00,
                    StarRating = (decimal)4.7,
                    ImageUrl = "https://images-na.ssl-images-amazon.com/images/M/MV5BODE1MDczNTUxOV5BMl5BanBnXkFtZTcwMTA0NDQyNA@@._V1_UX182_CR0,0,182,268_AL_.jpg"
                },

                new MovieModel
                {
                    MovieName = "Die Hard",
                    MovieStar = "Bruce Willis",
                    Description = "John McClane, officer of the NYPD, tries to save his wife Holly Gennaro and several others that were taken hostage by German terrorist Hans Gruber during a Christmas party at the Nakatomi Plaza in Los Angeles.",
                    ReleaseDate = DateTime.Parse("3/15/1988"),
                    Price = (decimal)7.50,
                    StarRating = (decimal)4.3,
                    ImageUrl = "https://images-na.ssl-images-amazon.com/images/M/MV5BYmY2ZGEwMTYtNjBmZS00OGE4LWEyMmUtNjAwMWUxZjVmZTRiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
                }           

                );
        
            */

            context.Artists.AddOrUpdate(
                a => a.Name,
                new Artist
                {
                    Name = "DiCarpio",
                    DateOfBirth = DateTime.Parse("06/22/1984"),      
                    BirthPlace = "Nopoli Italy"
                }

                );

           
            /*

            context.MovieEvents.AddOrUpdate(
                e => e.EventDescription,
                new MovieEvent
                {
                    EventDescription = "Overseas shoots day 2",
                    EventDate = DateTime.Parse("02/15/2002"),
                    Place = "Boracay, Philippines",
                    MovieId = 1
                }

                );

             */

        }
    }
}
