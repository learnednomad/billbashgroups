import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Truck,
    Container,
    Fuel,
    Cog,
    Wrench,
    Bike,
    Filter,
    Search,
    Calendar,
    MapPin,
    DollarSign,
    Phone,
    Mail,
    Eye,
    Heart,
    CheckCircle,
    Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import images from assets folder
import SemiTrailer1 from "@/assets/images/semi-trailer-1.jpg";
import SemiTrailer2 from "../assets/images/semi-trailer-2.jpg";
import DumpTruck1 from "../assets/images/dump-truck-1.jpg";
import DumpTruck2 from "../assets/images/dump-truck-2.jpg";
import TankerTruck1 from "../assets/images/tanker-1.jpg";
import TankerTruck2 from "../assets/images/tanker-2.jpg";
import FlatbedTruck1 from "../assets/images/fleet-of-newly-imported-trucks.jpg";
import BoxTruck1 from "../assets/images/truck-hero.jpg";
import UtilityVehicle1 from "../assets/images/utility-vehicle-1.jpg";
import AgriculturalVehicle1 from "../assets/images/agricultural-vehicle-1.jpg";
import Motorcycle1 from "../assets/images/motorcycle-1.jpg";
import Motorcycle2 from "../assets/images/motorcycle-2.jpg";

const VehicleListingsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const categories = [
        { id: "all", name: "All Vehicles", icon: <Truck className="h-5 w-5" />, count: 28 },
        { id: "semi-trailers", name: "Semi-Trailers", icon: <Truck className="h-5 w-5" />, count: 8 },
        { id: "dump-trucks", name: "Dump Trucks", icon: <Container className="h-5 w-5" />, count: 6 },
        { id: "tanker-trucks", name: "Tanker Trucks", icon: <Fuel className="h-5 w-5" />, count: 4 },
        { id: "flatbed-box", name: "Flatbed & Box", icon: <Cog className="h-5 w-5" />, count: 5 },
        { id: "utility-agricultural", name: "Utility & Agricultural", icon: <Wrench className="h-5 w-5" />, count: 3 },
        { id: "motorcycles", name: "Motorcycles", icon: <Bike className="h-5 w-5" />, count: 2 }
    ];

    const vehicles = [
        // Semi-Trailers
        {
            id: 1,
            category: "semi-trailers",
            name: "Volvo FH16 Semi-Trailer",
            year: 2022,
            mileage: "45,000 km",
            price: "$85,000",
            location: "Port of Lagos",
            status: "Available",
            image: SemiTrailer1,
            features: ["Euro 6 Engine", "Automatic Transmission", "GPS Navigation", "Air Conditioning"],
            specifications: {
                engine: "13L D13K540",
                power: "540 HP",
                transmission: "I-Shift Automated",
                fuelCapacity: "1,000L"
            }
        },
        {
            id: 2,
            category: "semi-trailers",
            name: "Mercedes Actros 2545",
            year: 2021,
            mileage: "62,000 km",
            price: "$78,000",
            location: "Port of Lagos",
            status: "Available",
            image: SemiTrailer2,
            features: ["PowerShift 3", "Multimedia Cockpit", "Predictive Powertrain", "Safety Package"],
            specifications: {
                engine: "OM 471",
                power: "449 HP",
                transmission: "PowerShift 3",
                fuelCapacity: "840L"
            }
        },

        // Dump Trucks
        {
            id: 3,
            category: "dump-trucks",
            name: "Caterpillar 773G Dump Truck",
            year: 2020,
            mileage: "38,000 km",
            price: "$320,000",
            location: "Port of Lagos",
            status: "Available",
            image: DumpTruck1,
            features: ["Advanced Hydraulics", "Reinforced Body", "Traction Control", "Operator Comfort"],
            specifications: {
                engine: "Cat C27 ACERT",
                power: "755 HP",
                payload: "68.9 tonnes",
                bodyCapacity: "41.3 m³"
            }
        },
        {
            id: 4,
            category: "dump-trucks",
            name: "Komatsu HD785-7 Dump Truck",
            year: 2021,
            mileage: "25,000 km",
            price: "$380,000",
            location: "Port of Lagos",
            status: "Reserved",
            image: DumpTruck2,
            features: ["KOMTRAX System", "Variable Geometry Turbo", "Wet Disc Brakes", "ROPS/FOPS Cab"],
            specifications: {
                engine: "Komatsu SAA6D170E-5",
                power: "794 HP",
                payload: "91 tonnes",
                bodyCapacity: "50.9 m³"
            }
        },

        // Tanker Trucks
        {
            id: 5,
            category: "tanker-trucks",
            name: "Scania P320 Fuel Tanker",
            year: 2022,
            mileage: "28,000 km",
            price: "$95,000",
            location: "Port of Lagos",
            status: "Available",
            image: TankerTruck1,
            features: ["Stainless Steel Tank", "Multi-Compartment", "Safety Valves", "Anti-Splash Baffles"],
            specifications: {
                engine: "DC09 114",
                power: "320 HP",
                tankCapacity: "25,000L",
                compartments: "4"
            }
        },
        {
            id: 6,
            category: "tanker-trucks",
            name: "MAN TGX 26.480 Chemical Tanker",
            year: 2021,
            mileage: "35,000 km",
            price: "$110,000",
            location: "Port of Lagos",
            status: "Available",
            image: TankerTruck2,
            features: ["Chemical Resistant Coating", "Temperature Control", "Emergency Valves", "ADR Certified"],
            specifications: {
                engine: "D2676 LF56",
                power: "480 HP",
                tankCapacity: "28,000L",
                material: "Stainless Steel 316L"
            }
        },

        // Flatbed & Box Trucks
        {
            id: 7,
            category: "flatbed-box",
            name: "Isuzu NPR Flatbed Truck",
            year: 2022,
            mileage: "15,000 km",
            price: "$45,000",
            location: "Port of Lagos",
            status: "Available",
            image: FlatbedTruck1,
            features: ["Hydraulic Tailgate", "Steel Flatbed", "Tie-Down Points", "LED Lighting"],
            specifications: {
                engine: "4HK1-TC",
                power: "190 HP",
                payload: "6.2 tonnes",
                bedLength: "6.2m"
            }
        },
        {
            id: 8,
            category: "flatbed-box",
            name: "Ford Transit Box Truck",
            year: 2023,
            mileage: "8,000 km",
            price: "$52,000",
            location: "Port of Lagos",
            status: "Available",
            image: BoxTruck1,
            features: ["Aluminum Body", "Roll-Up Door", "Interior Lighting", "Side Door Access"],
            specifications: {
                engine: "3.5L EcoBoost V6",
                power: "310 HP",
                cargoSpace: "15.2 m³",
                maxWeight: "4,990 kg"
            }
        },

        // Utility & Agricultural
        {
            id: 9,
            category: "utility-agricultural",
            name: "John Deere 6120M Utility Tractor",
            year: 2021,
            mileage: "1,200 hours",
            price: "$68,000",
            location: "Port of Lagos",
            status: "Available",
            image: UtilityVehicle1,
            features: ["PowrReverser Transmission", "Hydraulic SCV", "Air Conditioning", "LED Lighting"],
            specifications: {
                engine: "PowerTech PSS 4.5L",
                power: "120 HP",
                transmission: "PowrReverser",
                hydraulics: "Open Center"
            }
        },
        {
            id: 10,
            category: "utility-agricultural",
            name: "Case IH Magnum 340 CVX",
            year: 2020,
            mileage: "2,800 hours",
            price: "$125,000",
            location: "Port of Lagos",
            status: "Available",
            image: AgriculturalVehicle1,
            features: ["CVX Transmission", "AFS AccuGuide", "Luxury Cab", "High-Flow Hydraulics"],
            specifications: {
                engine: "FPT Cursor 9",
                power: "340 HP",
                transmission: "CVX",
                hydraulics: "182 L/min"
            }
        },

        // Motorcycles
        {
            id: 11,
            category: "motorcycles",
            name: "Honda CB650R",
            year: 2023,
            mileage: "2,500 km",
            price: "$8,500",
            location: "Port of Lagos",
            status: "Available",
            image: Motorcycle1,
            features: ["LED Lighting", "Digital Display", "ABS Brakes", "Slip Assist Clutch"],
            specifications: {
                engine: "649cc Inline-4",
                power: "95 HP",
                transmission: "6-Speed Manual",
                fuelCapacity: "15.4L"
            }
        },
        {
            id: 12,
            category: "motorcycles",
            name: "Yamaha MT-07",
            year: 2022,
            mileage: "4,200 km",
            price: "$7,200",
            location: "Port of Lagos",
            status: "Available",
            image: Motorcycle2,
            features: ["Crossplane Concept", "A&S Clutch", "LCD Display", "LED Headlight"],
            specifications: {
                engine: "689cc CP2",
                power: "73.4 HP",
                transmission: "6-Speed Manual",
                fuelCapacity: "14L"
            }
        }
    ];

    const filteredVehicles = vehicles.filter(vehicle => {
        const matchesCategory = selectedCategory === "all" || vehicle.category === selectedCategory;
        const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vehicle.year.toString().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    const VehicleCard = ({ vehicle }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
        >
            <div className="relative overflow-hidden">
                <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              vehicle.status === 'Available'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
          }`}>
            {vehicle.status}
          </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                        <Heart className="h-4 w-4 text-red-600" />
                    </button>
                </div>
                <div className="absolute bottom-4 right-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {vehicle.price}
          </span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{vehicle.name}</h3>
                        <p className="text-sm text-gray-500 flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {vehicle.year} • {vehicle.mileage}
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {vehicle.location}
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                        {vehicle.features.slice(0, 3).map((feature, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {feature}
              </span>
                        ))}
                        {vehicle.features.length > 3 && (
                            <span className="text-xs text-red-600 px-2 py-1">
                +{vehicle.features.length - 3} more
              </span>
                        )}
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button className="flex-1 bg-red-600 text-white hover:bg-red-700 text-sm py-2">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                    </Button>
                    <Button variant="outline" className="px-4 border-red-600 text-red-600 hover:bg-red-50 text-sm py-2">
                        <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="px-4 border-red-600 text-red-600 hover:bg-red-50 text-sm py-2">
                        <Mail className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Vehicle Inventory
                        </h1>
                        <p className="text-xl text-red-100 max-w-3xl mx-auto">
                            Browse our comprehensive selection of premium commercial vehicles and motorcycles,
                            all thoroughly inspected and ready for immediate delivery.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters and Search */}
            <section className="py-8 bg-white shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-6 items-center">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search vehicles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                                        selectedCategory === category.id
                                            ? 'bg-red-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {category.icon}
                                    <span className="ml-2 text-sm font-medium">{category.name}</span>
                                    <span className="ml-1 text-xs opacity-75">({category.count})</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {selectedCategory === "all" ? "All Vehicles" :
                                categories.find(c => c.id === selectedCategory)?.name}
                            <span className="text-gray-500 ml-2">({filteredVehicles.length})</span>
                        </h2>

                        <div className="flex items-center gap-2">
                            <Filter className="h-5 w-5 text-gray-400" />
                            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                                <option>Sort by Price</option>
                                <option>Sort by Year</option>
                                <option>Sort by Mileage</option>
                            </select>
                        </div>
                    </div>

                    {filteredVehicles.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredVehicles.map((vehicle) => (
                                <VehicleCard key={vehicle.id} vehicle={vehicle} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <Truck className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">No vehicles found</h3>
                            <p className="text-gray-500">Try adjusting your search criteria or category filter.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Don't See What You're Looking For?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            We have access to a global network of suppliers and can source specific vehicles to meet your exact requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="bg-red-600 text-white hover:bg-red-700 px-8 py-3 rounded-full font-semibold">
                                <Link to="/contact">Request Custom Vehicle</Link>
                            </Button>
                            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold">
                                <Link to="/truck-importation">View Import Process</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default VehicleListingsPage;