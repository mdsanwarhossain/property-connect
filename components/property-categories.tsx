import type React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  Home,
  Building,
  Warehouse,
  Landmark,
  Map,
  BedIcon,
  BathIcon,
  SquareIcon as SquareFootageIcon,
  Tag,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PropertyCategories() {
  return (
    <div className="mb-12">
      <Tabs defaultValue="residential" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="residential" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span>Residential</span>
          </TabsTrigger>
          <TabsTrigger value="commercial" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span>Commercial</span>
          </TabsTrigger>
          <TabsTrigger value="industrial" className="flex items-center gap-2">
            <Warehouse className="h-4 w-4" />
            <span>Industrial</span>
          </TabsTrigger>
          <TabsTrigger value="agricultural" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M3 6v14" />
              <path d="M3 6h18" />
              <path d="M10 6V4c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v2" />
              <path d="M5 14h14" />
              <path d="M5 10h14" />
              <path d="M5 18h14" />
              <path d="M19 6v14" />
            </svg>
            <span>Agricultural</span>
          </TabsTrigger>
          <TabsTrigger value="land" className="flex items-center gap-2">
            <Map className="h-4 w-4" />
            <span>Land</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="residential" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard
              title="Apartments"
              image="/placeholder.svg?height=200&width=300"
              count={24}
              icon={<Home className="h-5 w-5 text-blue-600" />}
              link="/properties?type=Apartment"
              details={[
                { icon: <BedIcon className="h-4 w-4" />, text: "1-4 Beds" },
                { icon: <BathIcon className="h-4 w-4" />, text: "1-3 Baths" },
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "600-2000 sq.ft" },
                { icon: <Tag className="h-4 w-4" />, text: "25K-80K BDT/mo" },
              ]}
            />
            <CategoryCard
              title="Houses"
              image="/placeholder.svg?height=200&width=300"
              count={18}
              icon={<Home className="h-5 w-5 text-blue-600" />}
              link="/properties?type=House"
              details={[
                { icon: <BedIcon className="h-4 w-4" />, text: "3-5 Beds" },
                { icon: <BathIcon className="h-4 w-4" />, text: "2-4 Baths" },
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "1500-3000 sq.ft" },
                { icon: <Tag className="h-4 w-4" />, text: "40K-100K BDT/mo" },
              ]}
            />
            <CategoryCard
              title="Villas"
              image="/placeholder.svg?height=200&width=300"
              count={12}
              icon={<Building className="h-5 w-5 text-blue-600" />}
              link="/properties?type=Villa"
              details={[
                { icon: <BedIcon className="h-4 w-4" />, text: "4-6 Beds" },
                { icon: <BathIcon className="h-4 w-4" />, text: "3-5 Baths" },
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "3000-5000 sq.ft" },
                { icon: <Tag className="h-4 w-4" />, text: "100K-200K BDT/mo" },
              ]}
            />
            <CategoryCard
              title="Duplexes"
              image="/placeholder.svg?height=200&width=300"
              count={8}
              icon={<Building className="h-5 w-5 text-blue-600" />}
              link="/properties?type=Duplex"
              details={[
                { icon: <BedIcon className="h-4 w-4" />, text: "3-5 Beds" },
                { icon: <BathIcon className="h-4 w-4" />, text: "2-4 Baths" },
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "2000-3500 sq.ft" },
                { icon: <Tag className="h-4 w-4" />, text: "60K-150K BDT/mo" },
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="commercial" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard
              title="Office Spaces"
              image="/placeholder.svg?height=200&width=300"
              count={15}
              icon={<Building className="h-5 w-5 text-blue-600" />}
              link="/properties?type=Office"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "500-5000 sq.ft" },
                { icon: <Tag className="h-4 w-4" />, text: "40K-200K BDT/mo" },
              ]}
            />
            <CategoryCard
              title="Retail Shops"
              image="/placeholder.svg?height=200&width=300"
              count={10}
              icon={<Building className="h-5 w-5 text-blue-600" />}
              link="/properties?type=Retail"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "300-2000 sq.ft" },
                { icon: <Tag className="h-4 w-4" />, text: "30K-150K BDT/mo" },
              ]}
            />
            <CategoryCard
              title="Restaurants"
              image="/placeholder.svg?height=200&width=300"
              count={6}
              icon={<Building className="h-5 w-5 text-blue-600" />}
              link="/properties?type=Restaurant"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "800-3000 sq.ft" },
                { icon: <Tag className="h-4 w-4" />, text: "50K-180K BDT/mo" },
              ]}
            />
            <CategoryCard
              title="Hotels"
              image="/placeholder.svg?height=200&width=300"
              count={4}
              icon={<Landmark className="h-5 w-5 text-blue-600" />}
              link="/properties?type=Hotel"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "2000-10000 sq.ft" },
                { icon: <Tag className="h-4 w-4" />, text: "150K-500K BDT/mo" },
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="industrial" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard
              title="Warehouses"
              image="/placeholder.svg?height=200&width=300"
              count={8}
              icon={<Warehouse className="h-5 w-5 text-blue-600" />}
              link="/properties?type=Warehouse"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "2000-10000 sq.ft" },
                { icon: <Tag className="h-4 w-4" />, text: "80K-300K BDT/mo" },
              ]}
            />
            <CategoryCard
              title="Factories"
              image="/placeholder.svg?height=200&width=300"
              count={5}
              icon={<Warehouse className="h-5 w-5 text-blue-600" />}
              link="/properties?type=Factory"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "5000-20000 sq.ft" },
                { icon: <Tag className="h-4 w-4" />, text: "150K-500K BDT/mo" },
              ]}
            />
            <CategoryCard
              title="Manufacturing"
              image="/placeholder.svg?height=200&width=300"
              count={3}
              icon={<Warehouse className="h-5 w-5 text-blue-600" />}
              link="/properties?type=Manufacturing"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "3000-15000 sq.ft" },
                { icon: <Tag className="h-4 w-4" />, text: "120K-400K BDT/mo" },
              ]}
            />
            <CategoryCard
              title="Storage Units"
              image="/placeholder.svg?height=200&width=300"
              count={12}
              icon={<Warehouse className="h-5 w-5 text-blue-600" />}
              link="/properties?type=Storage"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "500-3000 sq.ft" },
                { icon: <Tag className="h-4 w-4" />, text: "20K-100K BDT/mo" },
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="agricultural" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard
              title="Farmland"
              image="/placeholder.svg?height=200&width=300"
              count={7}
              icon={<Map className="h-5 w-5 text-blue-600" />}
              link="/properties?type=Farmland"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "1-10 acres" },
                { icon: <Tag className="h-4 w-4" />, text: "50K-200K BDT/mo" },
              ]}
            />
            <CategoryCard
              title="Orchards"
              image="/placeholder.svg?height=200&width=300"
              count={4}
              icon={<Map className="h-5 w-5 text-blue-600" />}
              link="/properties?type=Orchard"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "2-8 acres" },
                { icon: <Tag className="h-4 w-4" />, text: "70K-180K BDT/mo" },
              ]}
            />
            <CategoryCard
              title="Poultry Farms"
              image="/placeholder.svg?height=200&width=300"
              count={3}
              icon={<Map className="h-5 w-5 text-blue-600" />}
              link="/properties?type=PoultryFarm"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "1-5 acres" },
                { icon: <Tag className="h-4 w-4" />, text: "60K-150K BDT/mo" },
              ]}
            />
            <CategoryCard
              title="Fish Farms"
              image="/placeholder.svg?height=200&width=300"
              count={2}
              icon={<Map className="h-5 w-5 text-blue-600" />}
              link="/properties?type=FishFarm"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "1-6 acres" },
                { icon: <Tag className="h-4 w-4" />, text: "50K-140K BDT/mo" },
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="land" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard
              title="Residential Plots"
              image="/placeholder.svg?height=200&width=300"
              count={14}
              icon={<Map className="h-5 w-5 text-blue-600" />}
              link="/properties?type=ResidentialPlot"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "3-10 katha" },
                { icon: <Tag className="h-4 w-4" />, text: "50L-2Cr BDT" },
              ]}
            />
            <CategoryCard
              title="Commercial Plots"
              image="/placeholder.svg?height=200&width=300"
              count={8}
              icon={<Map className="h-5 w-5 text-blue-600" />}
              link="/properties?type=CommercialPlot"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "5-20 katha" },
                { icon: <Tag className="h-4 w-4" />, text: "1Cr-5Cr BDT" },
              ]}
            />
            <CategoryCard
              title="Industrial Plots"
              image="/placeholder.svg?height=200&width=300"
              count={5}
              icon={<Map className="h-5 w-5 text-blue-600" />}
              link="/properties?type=IndustrialPlot"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "10-50 katha" },
                { icon: <Tag className="h-4 w-4" />, text: "2Cr-10Cr BDT" },
              ]}
            />
            <CategoryCard
              title="Agricultural Land"
              image="/placeholder.svg?height=200&width=300"
              count={9}
              icon={<Map className="h-5 w-5 text-blue-600" />}
              link="/properties?type=AgriculturalLand"
              details={[
                { icon: <SquareFootageIcon className="h-4 w-4" />, text: "1-10 bigha" },
                { icon: <Tag className="h-4 w-4" />, text: "30L-1.5Cr BDT" },
              ]}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface CategoryCardProps {
  title: string
  image: string
  count: number
  icon: React.ReactNode
  link: string
  details: Array<{
    icon: React.ReactNode
    text: string
  }>
}

function CategoryCard({ title, image, count, icon, link, details }: CategoryCardProps) {
  return (
    <Link href={link}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-200">
        <div className="relative h-36 w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-3 left-3 text-white font-semibold">{title}</div>
        </div>
        <CardContent className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              {icon}
              <span className="text-sm font-medium">{title}</span>
            </div>
            <div className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">{count} listings</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {details.map((detail, index) => (
              <div key={index} className="flex items-center gap-1 text-xs text-gray-600">
                {detail.icon}
                <span>{detail.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
