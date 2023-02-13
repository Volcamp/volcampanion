package org.volcampanion.service;

import io.quarkus.panache.common.Parameters;
import org.volcampanion.domain.Conference;
import org.volcampanion.entities.ConferenceEntity;
import org.volcampanion.entities.mappers.ConferenceMapper;
import org.volcampanion.reposistories.ConferenceRepo;
import org.volcampanion.reposistories.TalkRepo;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class ConferenceService {
    @Inject
    ConferenceMapper confMapper;
    @Inject
    ConferenceRepo confRepo;
    @Inject
    TalkRepo talkRepo;
    public List<Conference> getAll() {
        return confMapper.listEntityToDomain(confRepo.listAll());
    }

    public Conference getById(Long id) {
        return confMapper.entityToDomain(confRepo.findById(id));
    }

    public List<Conference> listByName(String searchedName) {
        searchedName = "%" + searchedName + "%";
        return confMapper.listEntityToDomain(confRepo.find("nom", searchedName).list());
    }

    public boolean deleteConfTalk(Long id) {
        TalkRepo tr= new TalkRepo();
       long del= getByConf(id);
        return confRepo.deleteById(id);
    }
    public long getByConf(Long conf_id){
        //attention here to column and tabel names

        try{
            return  (talkRepo.delete("from talkEntity where conf_id = :conf_id", Parameters.with("conf_id",conf_id)));
        }
        catch (Exception ex){
            throw ex;
        }

    }

    public void createConference(Conference conf) {
        confRepo.getEntityManager().merge(confMapper.domainToEntity(conf));
    }

    @Transactional
    public void updateConference(Conference newConf) {
      //  if (confRepo.findById(newConf.getId())==null) throw new NotFoundException("Talk to update not found");
      ConferenceEntity conferenceEntity=  (confMapper.domainToEntity(newConf));
        confRepo.getEntityManager().merge(conferenceEntity);
    }


}
