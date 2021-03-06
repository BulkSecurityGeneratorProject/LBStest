import { BaseEntity } from './../../shared';

export class POIHistoricalLocationLbs implements BaseEntity {
    constructor(
        public id?: number,
        public longitude?: number,
        public latitude?: number,
        public altitude?: number,
        public bearing?: number,
        public speed?: number,
        public time?: any,
        public typeId?: number,
        public poiId?: number,
    ) {
    }
}
