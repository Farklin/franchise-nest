import { Injectable } from '@nestjs/common';
import { CreateFranchiseDto } from './dto/create-franchise.dto';
import { UpdateFranchiseDto } from './dto/update-franchise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Franchise } from './entities/franchise.entity';

@Injectable()
export class FranchiseService {

  constructor(
    @InjectRepository(Franchise)
    private franchiseRepository: Repository<Franchise>,
  ) {}


  create(createFranchiseDto: CreateFranchiseDto) {
    return this.franchiseRepository.save(createFranchiseDto);
  }

  findAll() {
    return this.franchiseRepository.find();
  }

  findOne(id: number) {
      return this.franchiseRepository.findOne({ where: { id } });
  }

  update(id: number, updateFranchiseDto: UpdateFranchiseDto) {
    return this.franchiseRepository.update(id, updateFranchiseDto);
  }

  remove(id: number) {
    return this.franchiseRepository.delete(id);
  }
}
