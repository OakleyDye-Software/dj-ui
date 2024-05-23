export interface IPackage {
    id: number;
    name: string;
    description: string;
    price: number;
    features: IPackageFeature[];
}

interface IPackageFeature {
    id: number;
    name: string;
    description: string;
}