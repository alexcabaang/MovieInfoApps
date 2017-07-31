using System.Collections.Generic;
using Model;

namespace DataLayer
{
    public interface IArtist : IRepository<Artist>
    {
        IEnumerable<Artist> GetCorrespondingArtist(int id);
        Artist Find(int id);
    }
}
