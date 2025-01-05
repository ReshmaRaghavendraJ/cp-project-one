package com.example.Antiragging.Repository;

import com.example.Antiragging.Entity.Branch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BranchRepo extends JpaRepository<Branch,Integer>
{
    boolean existsByBranchname(String branchname);
}
