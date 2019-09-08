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
        public DateTime? Published { get; set; }

        /**
        * Selling place No.1
        */
        [DataMember(Name = "sellingPlace1", Order = 6)]
        public string SellingPlace1 { get; set; }

        /**
        * Selling place No.1 web
        */
        [DataMember(Name = "sellingPlace1Web", Order = 7)]
        public string SellingPlace1Web { get; set; }

        /**
        * Selling place No.2
        */
        [DataMember(Name = "sellingPlace2", Order = 8)]
        public string SellingPlace2 { get; set; }

        /**
        * Selling place No.2 web
        */
        [DataMember(Name = "sellingPlace2Web", Order = 9)]
        public string SellingPlace2Web { get; set; }

        /**
        * Selling place No.3
        */
        [DataMember(Name = "sellingPlace3", Order = 10)]
        public string SellingPlace3 { get; set; }

        /**
        * Selling place No.3 web
        */
        [DataMember(Name = "sellingPlace3Web", Order = 11)]
        public string SellingPlace3Web { get; set; }

        /**
        * Selling place No.4
        */
        [DataMember(Name = "sellingPlace4", Order = 12)]
        public string SellingPlace4 { get; set; }

        /**
        * Selling place No.4 web
        */
        [DataMember(Name = "sellingPlace4Web", Order = 13)]
        public string SellingPlace4Web { get; set; }

        /**
        * Selling place No.5
        */
        [DataMember(Name = "sellingPlace5", Order = 14)]
        public string SellingPlace5 { get; set; }

        /**
        * Selling place No.5 web
        */
        [DataMember(Name = "sellingPlace5Web", Order = 15)]
        public string SellingPlace5Web { get; set; }

        /**
        * Selling place No.6
        */
        [DataMember(Name = "sellingPlace6", Order = 16)]
        public string SellingPlace6 { get; set; }

        /**
        * Selling place No.6 web
        */
        [DataMember(Name = "sellingPlace6Web", Order = 17)]
        public string SellingPlace6Web { get; set; }

        /**
        * Selling place No.7
        */
        [DataMember(Name = "sellingPlace7", Order = 18)]
        public string SellingPlace7 { get; set; }

        /**
        * Selling place No.7 web
        */
        [DataMember(Name = "sellingPlace7Web", Order = 19)]
        public string SellingPlace7Web { get; set; }

        /**
        * Selling place No.8
        */
        [DataMember(Name = "sellingPlace8", Order = 20)]
        public string SellingPlace8 { get; set; }

        /**
        * Selling place No.8 web
        */
        [DataMember(Name = "sellingPlace8Web", Order = 21)]
        public string SellingPlace8Web { get; set; }

        /**
        * Selling place No.9
        */
        [DataMember(Name = "sellingPlace9", Order = 22)]
        public string SellingPlace9 { get; set; }

        /**
        * Selling place No.9 web
        */
        [DataMember(Name = "sellingPlace9Web", Order = 23)]
        public string SellingPlace9Web { get; set; }

        /**
        * Selling place No.10
        */
        [DataMember(Name = "sellingPlace10", Order = 24)]
        public string SellingPlace10 { get; set; }

        /**
        * Selling place No.10 web
        */
        [DataMember(Name = "sellingPlace10Web", Order = 25)]
        public string SellingPlace10Web { get; set; }

        /**
        * Selling place No.11
        */
        [DataMember(Name = "sellingPlace11", Order = 26)]
        public string SellingPlace11 { get; set; }

        /**
        * Selling place No.11 web
        */
        [DataMember(Name = "sellingPlace11Web", Order = 27)]
        public string SellingPlace11Web { get; set; }

        /**
        * Latitude of GPS position
        */
        [DataMember(Name = "gpsPositionLat", Order = 28)]
        public float? GpsPositionLat { get; set; }

        /**
        * Longitude of GPS position
        */
        [DataMember(Name = "gpsPositionLng", Order = 29)]
        public float? GpsPositionLng { get; set; }

        public Stamp()
        {
        }

        public Stamp(string lineToParse)
        {
            if (!string.IsNullOrEmpty(lineToParse))
            {
                string[] fields = lineToParse.Split(";");

                if (fields.Count() > 0) { this.Id = "Stamp_" + fields[0]; }
                if (fields.Count() > 1) { this.Name = fields[1]; }
                if (fields.Count() > 2) { this.Category = fields[2]; }
                if (fields.Count() > 3) { this.County = fields[3]; }
                if (fields.Count() > 4) { try { this.Published = DateTime.Parse(fields[4]); } catch { this.Published = null; } }
                if (fields.Count() > 5) { this.SellingPlace1 = fields[5]; }
                if (fields.Count() > 6) { this.SellingPlace1Web = fields[6]; }
                if (fields.Count() > 7) { this.SellingPlace2 = fields[7]; }
                if (fields.Count() > 8) { this.SellingPlace2Web = fields[8]; }
                if (fields.Count() > 9) { this.SellingPlace3 = fields[9]; }
                if (fields.Count() > 10) { this.SellingPlace3Web = fields[10]; }
                if (fields.Count() > 11) { this.SellingPlace4 = fields[11]; }
                if (fields.Count() > 12) { this.SellingPlace4Web = fields[12]; }
                if (fields.Count() > 13) { this.SellingPlace5 = fields[13]; }
                if (fields.Count() > 14) { this.SellingPlace5Web = fields[14]; }
                if (fields.Count() > 15) { this.SellingPlace6 = fields[15]; }
                if (fields.Count() > 16) { this.SellingPlace6Web = fields[16]; }
                if (fields.Count() > 17) { this.SellingPlace7 = fields[17]; }
                if (fields.Count() > 18) { this.SellingPlace7Web = fields[18]; }
                if (fields.Count() > 19) { this.SellingPlace8 = fields[19]; }
                if (fields.Count() > 20) { this.SellingPlace8Web = fields[20]; }
                if (fields.Count() > 21) { this.SellingPlace9 = fields[21]; }
                if (fields.Count() > 22) { this.SellingPlace9Web = fields[22]; }
                if (fields.Count() > 23) { this.SellingPlace10 = fields[23]; }
                if (fields.Count() > 24) { this.SellingPlace10Web = fields[24]; }
                if (fields.Count() > 25) { this.SellingPlace11 = fields[25]; }
                if (fields.Count() > 26) { this.SellingPlace11Web = fields[26]; }
                if (fields.Count() > 27) { try { this.GpsPositionLat = float.Parse(fields[27]); } catch { this.GpsPositionLat = null; } }
                if (fields.Count() > 28) { try { this.GpsPositionLng = float.Parse(fields[28]); } catch { this.GpsPositionLng = null; } }
            }
        }

        public override string ToString()
        { 
            return "Stampie [ID=" + this.Id + ", Name=" + this.Name + ", Category=" + this.Category + ", County=" + this.County +
                ", Published=" + (((this.Published != null) && this.Published.HasValue) ? this.Published.Value.ToString("d.M.yyyy") : "null") +
                ", GpsPositionLat=" + (((this.GpsPositionLat != null) && this.GpsPositionLat.HasValue) ? Convert.ToString(this.GpsPositionLat.Value) : "null") +
                ", GpsPositionLng=" + (((this.GpsPositionLng != null) && this.GpsPositionLng.HasValue) ? Convert.ToString(this.GpsPositionLng.Value) : "null") + "]";
        }
    }
}
