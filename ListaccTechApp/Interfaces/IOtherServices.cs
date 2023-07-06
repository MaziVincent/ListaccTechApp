using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.ViewModels;

namespace ListaccTechApp.Interfaces
{
    public interface IOtherServices
    {
        string Strip(string type);
        Task<DataModel> GetData();
    }
}