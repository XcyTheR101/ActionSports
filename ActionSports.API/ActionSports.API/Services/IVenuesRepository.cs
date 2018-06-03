﻿using ActionSports.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActionSports.API.Services {
    public interface IVenuesRepository {

        List<VenueModel> GetVenues();
    }
}
