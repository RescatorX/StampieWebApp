using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace StampieWebApp.Entities
{
    [DataContract]
    public class Stamp
    {
        /**
        * Stamp ID
        */
        [DataMember(Name = "id", Order = 1)]
        public string Id { get; set; }

        /**
        * Stamp name
        */
        [DataMember(Name = "name", Order = 2)]
        public string Name { get; set; }

        /**
        * Category
        */
        [DataMember(Name = "category", Order = 3)]
        public string Category { get; set; }

        /**
        * County of position
        */
        [DataMember(Name = "county", Order = 4)]
        public string County { get; set; }

        /**
        * Date of publishing
        */
        [DataMember(Name = "published", Order = 5)]
        public DateTime Published { get; set; }

        /**
        * Selling place No.1
        */
        [DataMember(Name = "sellingPlace1", Order = 5)]
        public string SellingPlace1 { get; set; }

        /**
        * Selling place No.1 web
        */
        public string SellingPlace1Web { get; set; }

        /**
        * Selling place No.2
        */
        [DataMember(Name = "sellingPlace1", Order = 5)]
        public string SellingPlace2 { get; set; }

        /**
        * Selling place No.2 web
        */
        public string SellingPlace2Web { get; set; }

        /**
        * Selling place No.3
        */
        [DataMember(Name = "sellingPlace1", Order = 5)]
        public string SellingPlace3 { get; set; }

        /**
        * Selling place No.3 web
        */
        public string SellingPlace3Web { get; set; }

        /**
        * Selling place No.4
        */
        [DataMember(Name = "sellingPlace1", Order = 5)]
        public string SellingPlace4 { get; set; }

        /**
        * Selling place No.4 web
        */
        public string SellingPlace4Web { get; set; }

        /**
        * Selling place No.5
        */
        [DataMember(Name = "sellingPlace1", Order = 5)]
        public string SellingPlace5 { get; set; }

        /**
        * Selling place No.5 web
        */
        public string SellingPlace5Web { get; set; }

        /**
        * Selling place No.6
        */
        [DataMember(Name = "sellingPlace1", Order = 5)]
        public string SellingPlace6 { get; set; }

        /**
        * Selling place No.6 web
        */
        public string SellingPlace6Web { get; set; }

        /**
        * Selling place No.7
        */
        [DataMember(Name = "sellingPlace1", Order = 5)]
        public string SellingPlace7 { get; set; }

        /**
        * Selling place No.7 web
        */
        public string SellingPlace7Web { get; set; }

        /**
        * Selling place No.8
        */
        [DataMember(Name = "sellingPlace1", Order = 5)]
        public string SellingPlace8 { get; set; }

        /**
        * Selling place No.8 web
        */
        public string SellingPlace8Web { get; set; }

        /**
        * Selling place No.9
        */
        [DataMember(Name = "sellingPlace1", Order = 5)]
        public string SellingPlace9 { get; set; }

        /**
        * Selling place No.9 web
        */
        public string SellingPlace9Web { get; set; }

        /**
        * Selling place No.10
        */
        [DataMember(Name = "sellingPlace1", Order = 5)]
        public string SellingPlace10 { get; set; }

        /**
        * Selling place No.10 web
        */
        public string SellingPlace10Web { get; set; }

        /**
        * Selling place No.11
        */
        [DataMember(Name = "sellingPlace1", Order = 5)]
        public string SellingPlace11 { get; set; }

        /**
        * Selling place No.11 web
        */
        public string SellingPlace11Web { get; set; }

        /**
        * Latitude of GPS position
        */
        [DataMember(Name = "gpsPositionLat", Order = 5)]
        public float? GpsPositionLat { get; set; }

        /**
        * Longitude of GPS position
        */
        [DataMember(Name = "gpsPositionLng", Order = 5)]
        public float? GpsPositionLng { get; set; }

        public Stamp()
        {
        }

        public Stamp(string lineToParse)
        {
            if (!string.IsNullOrEmpty(lineToParse))
            {
                string[] fields = lineToParse.Split(";");
            }
        }

        public override string ToString()
        { 
            return "Stampie [ID=" + this.Id + ", Name=" + this.Name + ", Category=" + this.Category + ", County=" + this.County +
                ", Published=" + ((this.Published != null) ? this.Published.ToString("d.M.yyyy") : "null") +
                ", GpsPositionLat=" + (((this.GpsPositionLat != null) && (this.GpsPositionLat.HasValue) ? Convert.ToString(this.GpsPositionLat.Value) : "null") +
                ", GpsPositionLng=" + ((this.GpsPositionLng != null) ? (this.GpsPositionLng.HasValue) ? Convert.ToString(this.GpsPositionLng.Value) : "null") + "]";
        }
    }
}
